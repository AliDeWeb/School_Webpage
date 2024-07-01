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

export const getAllNews = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const news = await ArticleModel.aggregate([
      {
        $match: { category: "news" },
      },
      {
        $project: {
          __v: 0,
          updatedAt: 0,
        },
      },
    ]);

    await ArticleModel.populate(news, {
      path: "author",
      select: "name lastName phoneNumber",
    });

    res.status(200).json({
      data: {
        news,
      },
    });
  },
);

export const getAllEvents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const events = await ArticleModel.aggregate([
      {
        $match: { category: "event" },
      },
      {
        $project: {
          __v: 0,
          updatedAt: 0,
        },
      },
    ]);

    await ArticleModel.populate(events, {
      path: "author",
      select: "name lastName phoneNumber",
    });

    res.status(200).json({
      data: {
        events,
      },
    });
  },
);
