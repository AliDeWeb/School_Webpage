import { NextFunction, Response } from "express";
import AppError from "../../utils/AppError/AppError";
import jwt from "jsonwebtoken";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import UserModelTypes from "../../models/UserModel/UserModel.types";
import { protectedRouteRequestType } from "../../utils/AppTypes/AppTypes";

export const protectedRoute = catchAsync(
  async (req: protectedRouteRequestType, res: Response, next: NextFunction) => {
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

    next();
  },
);
