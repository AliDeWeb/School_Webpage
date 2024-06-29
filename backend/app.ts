import express, { NextFunction, Request, Response } from "express";
import signupRouter from "./routes/AuthenticationRoutes/AuthenticationRoutes";
import errorController from "./controllers/ErrorController/ErrorController";
import AppError from "./utils/AppError/AppError";
import { errors } from "celebrate";

const app = express();

// Middlewares
app.use(express.json());
// <-- Authentication -->
app.use("/api/v1/auth", signupRouter);
// <-- 404 Route -->
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route is not defined`, 404));
});
// <-- Error Handler -->
app.use(errors({ statusCode: 401 }));
app.use(errorController);

export default app;
