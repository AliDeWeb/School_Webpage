import express, { NextFunction, Request, Response } from "express";
import errorController from "./controllers/ErrorController/ErrorController";
import AppError from "./utils/AppError/AppError";

const app = express();

// Middlewares
// <-- 404 Route -->
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route is not defined`, 404));
});
// <-- Error Handler -->
app.use(errorController);

export default app;
