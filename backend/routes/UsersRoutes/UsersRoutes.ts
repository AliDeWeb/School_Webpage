import express from "express";
import { changeUserRoleToAdmin } from "../../controllers/UsersController/UserRolesController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { restrictTo } from "../../controllers/AuthenticationController/RestrictToController";
import { getMe } from "../../controllers/UsersController/getMeController";
const router = express.Router();

// Routes
router.route("/get_me").get(protectedRoute, getMe);
router
  .route("/change_to_admin/:userId")
  .patch(protectedRoute, restrictTo("admin"), changeUserRoleToAdmin);

export default router;
