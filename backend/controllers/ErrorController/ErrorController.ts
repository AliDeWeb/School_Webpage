import { NextFunction, Request, Response } from "express";

// Types
import ErrorControllerType from "./ErrorController.types";

const errorController = (
  err: ErrorControllerType,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errMessage = err.message;
  const errStatusCode = err.statusCode || 500;
  const errStatus = err.status || `server error`;

  if (process.env.NODE_ENV === `development`) {
    res.status(errStatusCode).json({
      error: err,
      stack: err.stack,
      message: errMessage,
      status: errStatus,
    });
  } else {
    res.status(errStatusCode).json({
      message: errMessage,
      status: errStatus,
    });
  }
};

export default errorController;
