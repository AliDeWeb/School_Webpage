import { Request } from "express";
import UserModelTypes from "../../models/UserModel/UserModel.types";

interface getMeRequestType extends Request {
  user?: UserModelTypes;
}

type userRoles = "admin" | "user";

export { getMeRequestType, userRoles };
