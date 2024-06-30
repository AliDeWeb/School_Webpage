import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import jwt from "jsonwebtoken";
import AppError from "../../utils/AppError/AppError";

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      name,
      lastName,
      phoneNumber,
      classNumber,
      birthday,
      password,
    }: {
      name: string;
      lastName: string;
      phoneNumber: string;
      classNumber: string;
      birthday: string;
      password: string;
    } = req.body;

    const isAnyUserExistUser = await UserModel.findOne({ phoneNumber });
    if ((isAnyUserExistUser as { phoneNumber: string })?.phoneNumber)
      next(new AppError("شما با این شماره تلفن حساب کاربری دارید", 401));

    const newUser = await UserModel.create({
      name,
      lastName,
      phoneNumber,
      classNumber,
      birthday,
      password,
    });

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN as string,
      },
    );

    res.status(201).json({
      message: "خوش آمدید",
      token,
      data: {
        name,
        lastName,
        phoneNumber,
        classNumber,
        birthday,
      },
    });

    next();
  },
);
