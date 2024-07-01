import express, { NextFunction, Request, Response } from "express";
import authenticationRouter from "./routes/AuthenticationRoutes/AuthenticationRoutes";
import usersRouter from "./routes/UsersRoutes/UsersRoutes";
import articlesRouter from "./routes/ArticlesRoutes/ArticlesRoutes";
import errorController from "./controllers/ErrorController/ErrorController";
import AppError from "./utils/AppError/AppError";
import { errors } from "celebrate";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
// @ts-ignore
import xss from "xss-clean";

// Logics
const app = express();
// <-- express-rate-limit -->
const limiter = rateLimit({
  message: "درخواست بیش از حد!",
  max: 300,
  windowMs:
    (Number(process.env.MAX_REQUESTS_LIMIT_TIME as string) || 1) *
    60 *
    60 *
    1000,
});
// <-- Cors -->
const whitelist = [`http://127.0.0.1:${process.env.PORT || 3000}`];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin) {
      return callback(null, true);
    }

    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("دسترسی رد شد"), false);
    }
  },
};

// Middlewares
app.use(cors(corsOptions));
// <-- Security -->
app.use(helmet());
// <-- Limitation -->
app.use("/api", limiter);
// <-- Body Parser -->
app.use(express.json({ limit: "10kb" }));
// <-- Serving Static Files -->
app.use(express.static("uploads"));
// <-- Data Sanitizing -->
app.use(mongoSanitize());
app.use(xss());
// <-- Preventing Params Pollution -->
app.use(hpp());
// <-- Authentication -->
app.use("/api/v1/auth", authenticationRouter);
// <-- Users -->
app.use("/api/v1/users", usersRouter);
// <-- Articles -->
app.use("/api/v1/articles", articlesRouter);
// <-- 404 Route -->
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route is not defined`, 404));
});
// <-- Error Handler -->
app.use(errors({ statusCode: 401 }));
app.use(errorController);

export default app;
