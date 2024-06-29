import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";

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

    await UserModel.create({
      name,
      lastName,
      phoneNumber,
      classNumber,
      birthday,
      password,
    });

    res.status(201).json({
      message: "خوش آمدید",
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
