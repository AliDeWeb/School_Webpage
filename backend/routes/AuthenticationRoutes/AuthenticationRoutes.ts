import express from "express";
import { signup } from "../../controllers/AuthenticationController/SignupController";
import signupValidators from "../../validators/SignupValidators/SignupValidators";

const router = express.Router();

router.route("/signup").post(signupValidators, signup);

export default router;
