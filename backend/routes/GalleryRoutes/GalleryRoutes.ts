import express from "express";
import {
  addImageToGallery,
  uploadGalleryImage,
  resizeGalleryImage,
  getAllImagesFromGallery,
} from "../../controllers/GalleryController/GalleryController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { galleryValidator } from "../../validators/GalleryValidators/GalleryValidators";

const router = express.Router();

// Routes
router
  .route("/")
  .get(getAllImagesFromGallery)
  .post(
    protectedRoute,
    uploadGalleryImage,
    resizeGalleryImage,
    galleryValidator,
    addImageToGallery,
  );

export default router;
