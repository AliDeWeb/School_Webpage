import { NextFunction, Request, Response } from "express";
import { protectedRouteRequestType } from "../../utils/AppTypes/AppTypes";
import multer from "multer";
import AppError from "../../utils/AppError/AppError";
import sharp from "sharp";
import GalleryModel from "../../models/GalleryModel/GalleryModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";

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
export const uploadGalleryImage = upload.single("image");
export const resizeGalleryImage = (
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

export const addImageToGallery = catchAsync(
  async (req: protectedRouteRequestType, res: Response, next: NextFunction) => {
    let {
      title,
      description,
      imageDate,
    }: { title: string; description: string; imageDate: Date } = req.body;
    title = title.trim().toLowerCase();
    description = description.trim().toLowerCase();
    const Photographer = req.user?._id;
    const image = `${req.file?.filename.replace("uploads/", "")}`;

    if (!title || !description || !imageDate || !req.file)
      return next(new AppError("اطلاعات نامعتبر", 400));

    const newGallery = await GalleryModel.create({
      title,
      description,
      imageDate,
      Photographer,
      image,
    });

    res.status(201).json({
      data: {
        newGallery,
      },
    });
  },
);
