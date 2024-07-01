import express from "express";
import {
  addNewArticle,
  resizeArticleImage,
  uploadArticleImage,
} from "../../controllers/ArticlesController/AddNewArticleController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { restrictTo } from "../../controllers/AuthenticationController/RestrictToController";
import { articlesValidator } from "../../validators/ArticlesValidators/ArticlesValidators";

const router = express.Router();

// Routes
router
  .route("/")
  .post(
    protectedRoute,
    restrictTo("admin"),
    uploadArticleImage,
    resizeArticleImage,
    articlesValidator,
    addNewArticle,
  );

export default router;
