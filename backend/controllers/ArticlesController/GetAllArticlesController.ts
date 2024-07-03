import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import ArticleModel from "../../models/ArticleModel/ArticleModel";
import ApiFeatures from "../../utils/ApiFeatures/ApiFeatures";
import AppError from "../../utils/AppError/AppError";

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

export const getArticle = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const articleId = req.params.articleId;

    const article = await ArticleModel.findById(articleId);

    if (!article)
      return next(new AppError("این مقاله موجود نیست و یا حذف شده است", 404));

    res.status(200).json({
      data: {
        article,
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
      { $sort: { updatedAt: -1, createdAt: -1 } },
      {
        $project: {
          __v: 0,
          updatedAt: 0,
        },
      },
    ]);

    await ArticleModel.populate(news, {
      path: "author",
      select: "name lastName",
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
      { $sort: { updatedAt: -1, createdAt: -1 } },
      {
        $project: {
          __v: 0,
          updatedAt: 0,
        },
      },
    ]);

    await ArticleModel.populate(events, {
      path: "author",
      select: "name lastName",
    });

    res.status(200).json({
      data: {
        events,
      },
    });
  },
);
