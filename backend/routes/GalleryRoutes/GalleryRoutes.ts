import express from "express";
import {
  addImageToGallery,
  uploadGalleryImage,
  resizeGalleryImage,
  getAllImagesFromGallery,
  getGalleryImage,
  getMemories,
} from "../../controllers/GalleryController/GalleryController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { galleryValidator } from "../../validators/GalleryValidators/GalleryValidators";
import { errors } from "celebrate";

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

// <-- Memories -->
router.route("/memories").get(getMemories);

router.route("/:imageId").get(getGalleryImage);

router.use(errors());

export default router;
