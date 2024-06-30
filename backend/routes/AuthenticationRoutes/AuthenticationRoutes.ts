import express from "express";
import { signup } from "../../controllers/AuthenticationController/SignupController";
import { login } from "../../controllers/AuthenticationController/LoginController";
import signupValidators from "../../validators/SignupValidators/SignupValidators";

const router = express.Router();

router.route("/signup").post(signupValidators, signup);
router.route("/login").get(login);

export default router;
