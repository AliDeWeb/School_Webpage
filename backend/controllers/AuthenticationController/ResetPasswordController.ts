import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/AppError/AppError";
import UserModel from "../../models/UserModel/UserModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";

export const ResetPasswordCodeSender = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let { phoneNumber }: { phoneNumber: string } = req.body;
    phoneNumber = phoneNumber.trim().toLowerCase();

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
