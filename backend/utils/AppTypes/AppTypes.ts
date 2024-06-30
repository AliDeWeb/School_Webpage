import { Request } from "express";
import UserModelTypes from "../../models/UserModel/UserModel.types";

interface protectedRouteRequestType extends Request {
  user?: UserModelTypes;
}

type userRoles = "admin" | "user";

export { protectedRouteRequestType, userRoles };
