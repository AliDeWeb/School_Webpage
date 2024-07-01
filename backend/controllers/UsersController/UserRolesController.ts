import { NextFunction, Request, Response } from "express";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import AppError from "../../utils/AppError/AppError";

export const changeUserRoleToAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    const isAnyUserExist = await UserModel.findByIdAndUpdate(
      userId,
      {
        role: "admin",
      },
      { new: true },
    );

    if (!isAnyUserExist)
      return next(new AppError("کاربری با این مشخصات یافت نشد", 404));

    res.status(201).json({
      message: "عملیات موفقیت آمیز",
      data: {
        isAnyUserExist,
      },
    });
  },
);
