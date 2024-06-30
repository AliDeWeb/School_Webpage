import mongoose, { Model } from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";
import UserModelTypes from "./UserModel.types";

const userSchema = new Schema<UserModelTypes>(
  {
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    name: {
      type: String,
      required: [true, "نام خود را وارد نمایید!"],
    },
    lastName: {
      type: String,
      required: [true, "نام خانوادگی خود را وارد نمایید!"],
    },
    // @ts-ignore
    phoneNumber: {
      type: String,
      required: [true, "شماره تلفن خود را وارد نمایید!"],
      unique: "شما با این شماره تلفن حساب کاربری دارید!",
      validate: {
        validator: function (el: string) {
          const phoneRegex = /^09\d{9}$/;
          return el.match(phoneRegex);
        },
        message: "رمز عبور ها یکسان نیستند!",
      },
    },
    classNumber: {
      type: String,
      enum: ["101", "102", "103", "104", "105", "106"],
    },
    birthday: {
      type: Date,
    },
    password: {
      type: String,
      required: [true, "رمز عبور خود را وارد نمایید!"],
      minLength: [8, "رمز عبور حداقل باید 8 رقم داشته باشد!"],
    },
  },
  {
    timestamps: true,
  },
);

// Middlewares
// <-- Hash Password -->
userSchema.pre(`save`, async function (next) {
  if (!this.isModified(`password`)) return next();

  // @ts-ignore
  this.password = await bcrypt.hash(this.password, 12);
});

// Methods
// <-- Comparing Passwords -->
userSchema.methods.isPasswordCorrect = async (input: string, pass: string) => {
  return await bcrypt.compare(input, pass);
};

// Model
const UserModel: Model<UserModelTypes> = mongoose.model<UserModelTypes>(
  `Users`,
  userSchema,
);
export default UserModel;
