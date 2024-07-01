import { Document } from "mongoose";

interface UserModelTypes extends Document {
  name: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  role: "user" | "admin";
  classNumber: "101" | "102" | "103" | "104" | "105" | "106";
  birthday: Date;
  passwordUpdatedAt: Date;
  articles?: [];

  isPasswordCorrect(input: string, pass: string): Promise<boolean>;
  isTokenValid(passwordUpdatedAt: Date, tokenExpiresIn: number): boolean;
  generateResetPasswordToken(): string;
  areCodeAndResetPasswordTokenMatch(code: string): boolean;
  isResetTokenStillValid(): boolean;
  changePassword(newPassword: string): void;
}

export default UserModelTypes;
