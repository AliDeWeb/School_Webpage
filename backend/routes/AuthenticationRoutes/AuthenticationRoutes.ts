import express from "express";
import { signup } from "../../controllers/AuthenticationController/SignupController";

const router = express.Router();

router.route("/signup").post(signup);

export default router;
