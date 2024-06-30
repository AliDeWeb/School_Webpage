import express from "express";
import { signup } from "../../controllers/AuthenticationController/SignupController";
import { login } from "../../controllers/AuthenticationController/LoginController";
import { getMe } from "../../controllers/AuthenticationController/GetMeController";
import signupValidators from "../../validators/SignupValidators/SignupValidators";

const router = express.Router();

router.route("/signup").post(signupValidators, signup);
router.route("/login").get(login);
router.route("/get_me").get(getMe);

export default router;
