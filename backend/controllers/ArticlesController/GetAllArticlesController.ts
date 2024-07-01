import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import ArticleModel from "../../models/ArticleModel/ArticleModel";
import ApiFeatures from "../../utils/ApiFeatures/ApiFeatures";

export const getAllArticles = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = new ApiFeatures(ArticleModel.find(), req.query)
      .filter()
      .sort()
      .fields()
      .paginate();
    const allArticles = await query.query;

    res.status(200).json({
      data: {
        allArticles,
      },
    });
  },
);
