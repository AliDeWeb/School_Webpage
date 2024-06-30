import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import UserModel from "../../models/UserModel/UserModel";
import AppError from "../../utils/AppError/AppError";
import jwt from "jsonwebtoken";

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { phoneNumber, password }: { phoneNumber: string; password: string } =
      req.body;

    const isAnyUserExistUser = await UserModel.findOne({ phoneNumber });

    if (
      !isAnyUserExistUser ||
      !(await isAnyUserExistUser.isPasswordCorrect(
        password,
        isAnyUserExistUser.password,
      ))
    ) {
      return next(new AppError("شماره تلفن یا رمز عبور درست نیست", 401));
    }

    const token = jwt.sign(
      { id: isAnyUserExistUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN as string },
    );

    res.status(201).json({
      message: "خوش آمدید",
      token,
      data: {
        name: isAnyUserExistUser.name,
        lastName: isAnyUserExistUser.lastName,
        phoneNumber: isAnyUserExistUser.phoneNumber,
        classNumber: isAnyUserExistUser.classNumber,
        birthday: isAnyUserExistUser.birthday,
      },
    });
  },
);
