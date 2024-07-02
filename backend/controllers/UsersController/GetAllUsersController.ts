import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import UserModel from "../../models/UserModel/UserModel";
import ApiFeatures from "../../utils/ApiFeatures/ApiFeatures";

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = new ApiFeatures(UserModel.find(), req.query);

    query.query.populate({
      path: "articles",
      select: "-author -__v -updatedAt",
    });

    const users = await query.query;

    res.status(200).json({
      data: { users },
    });
  },
);
