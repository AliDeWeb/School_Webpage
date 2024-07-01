import express from "express";
import {
  addNewArticle,
  resizeArticleImage,
  uploadArticleImage,
} from "../../controllers/ArticlesController/AddNewArticleController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { restrictTo } from "../../controllers/AuthenticationController/RestrictToController";
import { articlesValidator } from "../../validators/ArticlesValidators/ArticlesValidators";
import {
  getAllArticles,
  getAllNews,
} from "../../controllers/ArticlesController/GetAllArticlesController";

const router = express.Router();

// Routes
router
  .route("/")
  .get(protectedRoute, restrictTo("admin"), getAllArticles)
  .post(
    protectedRoute,
    restrictTo("admin"),
    uploadArticleImage,
    resizeArticleImage,
    articlesValidator,
    addNewArticle,
  );

router.route("/news").get(getAllNews);

export default router;
