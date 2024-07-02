import express from "express";
import { changeUserRoleToAdmin } from "../../controllers/UsersController/UserRolesController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { restrictTo } from "../../controllers/AuthenticationController/RestrictToController";
import { getMe } from "../../controllers/UsersController/getMeController";
import { getAllUsers } from "../../controllers/UsersController/GetAllUsersController";
import { errors } from "celebrate";

const router = express.Router();

// Routes
router.route("/").get(protectedRoute, restrictTo("admin"), getAllUsers);
router.route("/get_me").get(protectedRoute, getMe);
router
  .route("/change_to_admin/:userId")
  .patch(protectedRoute, restrictTo("admin"), changeUserRoleToAdmin);

router.use(errors());

export default router;
