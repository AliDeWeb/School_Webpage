import { NextFunction, Request, Response } from "express";
import { protectedRouteRequestType } from "../../utils/AppTypes/AppTypes";
import multer from "multer";
import AppError from "../../utils/AppError/AppError";
import sharp from "sharp";
import GalleryModel from "../../models/GalleryModel/GalleryModel";
import catchAsync from "../../utils/CatchAsync/CatchAsync";
import ApiFeatures from "../../utils/ApiFeatures/ApiFeatures";
import moment from "moment-jalaali";

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

  req.file.filename = `uploads/images/gallery/gallery-${req.user?._id}-${Date.now()}.jpeg`;

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
    title = title?.trim()?.toLowerCase();
    description = description?.trim()?.toLowerCase();
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

export const getAllImagesFromGallery = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = new ApiFeatures(GalleryModel.find(), req.query)
      .filter()
      .sort()
      .fields()
      .paginate();

    const gallery = await query.query;

    res.status(200).json({
      data: { gallery },
    });
  },
);

export const getGalleryImage = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const imageId = req.params.imageId;

    const image = await GalleryModel.findById(imageId);

    res.status(200).json({
      data: { image },
    });
  },
);

export const getMemories = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const currentYear = moment().jYear();
    const ranges = Array.from({ length: 6 }, (_, i) => ({
      start: currentYear - i,
      end: currentYear - i + 1,
    }));

    const memoriesPromises = ranges.map(async (range) => {
      const images = await GalleryModel.aggregate([
        {
          $match: {
            imageDate: {
              $gte: moment(`${range.start}-01-01`, "jYYYY-MM-DD").toDate(),
              $lt: moment(`${range.end}-01-01`, "jYYYY-MM-DD").toDate(),
            },
          },
        },
        {
          $group: {
            _id: null,
            data: { $push: "$$ROOT" },
          },
        },
        {
          $addFields: {
            dataYear: range.start,
          },
        },
        {
          $project: {
            _id: 0,
            data: 1,
          },
        },
      ]);

      return {
        [`${range.start}`]: images.length ? images[0].data : [],
      };
    });

    const memories = await Promise.all(memoriesPromises);

    res.status(200).json({
      data: {
        memories,
      },
    });
  },
);
