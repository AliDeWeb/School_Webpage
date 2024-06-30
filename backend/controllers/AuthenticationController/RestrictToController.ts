import { NextFunction, Response } from "express";
import {
  protectedRouteRequestType,
  userRoles,
} from "../../utils/AppTypes/AppTypes";
import AppError from "../../utils/AppError/AppError";

export const restrictTo = (...args: userRoles[]) => {
  return (
    req: protectedRouteRequestType,
    res: Response,
    next: NextFunction,
  ) => {
    if (!args.includes(req.user?.role as "admin" | "user"))
      return next(new AppError(`شما مجاز به انجام اینکار نیستید`, 403));

    next();
  };
};
