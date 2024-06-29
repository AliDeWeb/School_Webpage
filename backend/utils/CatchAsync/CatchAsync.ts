import { NextFunction, Request, Response } from "express";
import AppError from "../AppError/AppError";

const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>,
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: Error) => {
      next(new AppError(err.message as string, 500));
    });
  };
};

export default catchAsync;
