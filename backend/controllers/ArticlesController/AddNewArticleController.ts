import { NextFunction, Request, Response } from "express";
import multer from "multer";
import sharp from "sharp";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import { protectedRouteRequestType } from "../../utils/AppTypes/AppTypes";
import AppError from "../../utils/AppError/AppError";
import ArticleModel from "../../models/ArticleModel/ArticleModel";

const multerStorage = multer.memoryStorage();
const multerFilter = (
  req: Request,
  file: Express.Multer.File,
  callback: any,
) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new AppError("تنها تصاویر پشتیبانی می شوند", 400), false);
  }
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
export const uploadArticleImage = upload.single("image");
export const resizeArticleImage = (
  req: protectedRouteRequestType,
  res: Response,
  next: NextFunction,
) => {
  if (!req.file) return next();

  req.file.filename = `uploads/images/articles/article-${req.user?._id}-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .toFormat("jpeg")
    .jpeg({ quality: 85 })
    .toFile(req.file.filename);

  next();
};

export const addNewArticle = catchAsync(
  async (req: protectedRouteRequestType, res: Response, next: NextFunction) => {
    let {
      title,
      article,
      category,
    }: { title: string; article: string; category: string } = req.body;
    title = title.trim().toLowerCase();
    article = article.trim().toLowerCase();
    category = category.trim().toLowerCase();

    const image = `${req.file?.filename.replace("uploads/", "")}`;

    if (!title || !article || !category || !req.file)
      return next(new AppError("اطلاعات نامعتبر", 400));

    const newArticle = await ArticleModel.create({
      title,
      article,
      image,
      category,
      author: req.user?._id,
    });

    res.status(201).json({
      message: "مقاله با موفقیت ایجاد شد",
      data: {
        newArticle,
      },
    });
  },
);
