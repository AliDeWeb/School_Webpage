import express from "express";
import { signup } from "../../controllers/AuthenticationController/SignupController";
import { login } from "../../controllers/AuthenticationController/LoginController";
import {
  confirmResetPasswordTokenAndResetPassword,
  ResetPasswordCodeSender,
} from "../../controllers/AuthenticationController/ResetPasswordController";
import signupValidators from "../../validators/SignupValidators/SignupValidators";
import { errors } from "celebrate";

const router = express.Router();

// Routes
// <-- Authentication -->
router.route("/signup").post(signupValidators, signup);
router.route("/login").get(login);
// <-- Reset Password -->
router.route("/reset_password").post(ResetPasswordCodeSender);
router
  .route("/reset_password/final")
  .get(confirmResetPasswordTokenAndResetPassword);

router.use(errors());

export default router;
