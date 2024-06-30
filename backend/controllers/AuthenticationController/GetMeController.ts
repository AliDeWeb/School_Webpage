import { NextFunction, Response } from "express";
import AppError from "../../utils/AppError/AppError";
import jwt from "jsonwebtoken";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import UserModelTypes from "../../models/UserModel/UserModel.types";
import { getMeRequestType } from "../../utils/AppTypes/AppTypes";

export const getMe = catchAsync(
  async (req: getMeRequestType, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return next(new AppError("لطفا وارد حساب خود شوید", 403));

    let tokenInfo: unknown = null;
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err || !decoded) return next(new AppError("توکن معتبر نیست", 403));

      tokenInfo = decoded as { id: string; iat: number; exp: number };
    });

    if (!(tokenInfo as null)) return next(new AppError("توکن معتبر نیست", 403));

    const isAnyUserExist = await UserModel.findById(
      (tokenInfo as { id: string; iat: number; exp: number }).id,
    );

    if (!(isAnyUserExist as null))
      return next(new AppError("توکن معتبر نیست", 403));

    const isTokenValid = (isAnyUserExist as UserModelTypes).isTokenValid(
      (isAnyUserExist as UserModelTypes).passwordUpdatedAt,
      (tokenInfo as { id: string; iat: number; exp: number }).exp,
    );

    if (!isTokenValid) return next(new AppError("توکن معتبر نیست", 403));

    req.user = isAnyUserExist as UserModelTypes;

    res.status(201).json({
      data: {
        name: (isAnyUserExist as UserModelTypes).name,
        lastName: (isAnyUserExist as UserModelTypes).lastName,
        phoneNumber: (isAnyUserExist as UserModelTypes).phoneNumber,
        classNumber: (isAnyUserExist as UserModelTypes).classNumber,
        birthday: (isAnyUserExist as UserModelTypes).birthday,
      },
    });

    // next();
  },
);
