import { NextFunction, Response } from "express";
import { protectedRouteRequestType } from "../../utils/AppTypes/AppTypes";
import catchAsync from "../../utils/CatchAsync/CatchAsync";

export const getMe = catchAsync(
  async (req: protectedRouteRequestType, res: Response, next: NextFunction) => {
    res.status(201).json({
      data: {
        name: req?.user?.name,
        lastName: req?.user?.lastName,
        phoneNumber: req?.user?.phoneNumber,
        classNumber: req?.user?.classNumber,
        birthday: req?.user?.birthday,
        articles: req?.user?.articles,
      },
    });

    next();
  },
);
