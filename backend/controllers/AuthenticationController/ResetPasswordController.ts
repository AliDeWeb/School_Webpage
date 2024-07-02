import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/AppError/AppError";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";

export const ResetPasswordCodeSender = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let { phoneNumber }: { phoneNumber: string } = req.body;
    phoneNumber = phoneNumber?.trim()?.toLowerCase();

    if (!phoneNumber)
      return next(new AppError("شماره تلفن خود را وارد نمایید", 403));

    const isAnyUserExist = await UserModel.findOne({ phoneNumber });
    if (!isAnyUserExist)
      return next(new AppError("شماره تلفن نامعتبر می باشد", 403));

    const generatedCode = isAnyUserExist.generateResetPasswordToken();
    isAnyUserExist.save({ validateBeforeSave: false });

    /*
    \*******
        THIS LOGIC SHOULD BE CHANGED.
        VERIFICATION CODE SHOULD SEND BY SMS TO USER, NOT API RESPONSE
    *******\
     */
    res.status(201).json({
      data: {
        generatedCode,
      },
    });
  },
);

export const confirmResetPasswordTokenAndResetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { resetToken, phoneNumber, newPassword } = req.body;

    if (
      !phoneNumber ||
      !resetToken ||
      !newPassword ||
      (newPassword as string).length < 8
    )
      return next(new AppError("شماره تلفن یا توکن یا رمز عبور نامعتبر", 403));

    const isAnyUserExist = await UserModel.findOne({ phoneNumber });
    if (!isAnyUserExist)
      return next(new AppError("شماره تلفن نامعتبر می باشد", 403));

    const isCodeValid = isAnyUserExist.areCodeAndResetPasswordTokenMatch(
      resetToken as string,
    );
    if (!isCodeValid)
      return next(new AppError("کد تایید نامعتبر می باشد", 403));

    const isResetTokenStillValid = isAnyUserExist.isResetTokenStillValid();
    if (!isResetTokenStillValid)
      return next(new AppError("کد تایید منقضی شده است", 403));

    isAnyUserExist.changePassword(newPassword as string);
    isAnyUserExist.save({ validateBeforeSave: false });

    res.status(201).json({
      message: "عملیات موفق آمیز",
    });
  },
);
