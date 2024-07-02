import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import UserModel from "../../models/UserModel/UserModel";
import AppError from "../../utils/AppError/AppError";
import jwt from "jsonwebtoken";

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let { phoneNumber, password }: { phoneNumber: string; password: string } =
      req.body;

    phoneNumber = phoneNumber?.trim()?.toLowerCase();
    password = password?.trim()?.toLowerCase();

    if (!phoneNumber || !password)
      return next(
        new AppError("شماره تلفن و رمز عبور خود را وارد نمایید", 403),
      );

    const isAnyUserExist = await UserModel.findOne({ phoneNumber });

    if (
      !isAnyUserExist ||
      !(await isAnyUserExist.isPasswordCorrect(
        password,
        isAnyUserExist.password,
      ))
    ) {
      return next(new AppError("شماره تلفن یا رمز عبور درست نیست", 401));
    }

    const token = jwt.sign(
      { id: isAnyUserExist._id },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN as string },
    );

    res.status(201).json({
      message: "خوش آمدید",
      token,
      data: {
        name: isAnyUserExist.name,
        lastName: isAnyUserExist.lastName,
        phoneNumber: isAnyUserExist.phoneNumber,
        classNumber: isAnyUserExist.classNumber,
        birthday: isAnyUserExist.birthday,
      },
    });
  },
);
