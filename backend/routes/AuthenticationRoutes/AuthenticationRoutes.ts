import express from "express";
import { signup } from "../../controllers/AuthenticationController/SignupController";
import { login } from "../../controllers/AuthenticationController/LoginController";
import { protectedRoute } from "../../controllers/AuthenticationController/protectedRouteController";
import { getMe } from "../../controllers/AuthenticationController/getMeController";
import { ResetPasswordCodeSender } from "../../controllers/AuthenticationController/ResetPasswordController";
import signupValidators from "../../validators/SignupValidators/SignupValidators";

const router = express.Router();

// Routes
// <-- Authentication -->
router.route("/signup").post(signupValidators, signup);
router.route("/login").get(login);
router.route("/get_me").get(protectedRoute, getMe);
// <-- Reset Password -->
router.route("/reset_password").post(ResetPasswordCodeSender);

export default router;
