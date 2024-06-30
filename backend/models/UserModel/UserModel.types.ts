import { Document } from "mongoose";

interface UserModelTypes extends Document {
  name: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  role: "user" | "admin";
  classNumber: "101" | "102" | "103" | "104" | "105" | "106";
  birthday: Date;

  isPasswordCorrect: (input: string, pass: string) => Promise<boolean>;
}

export default UserModelTypes;
