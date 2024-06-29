import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema(
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
    phoneNumber: {
      type: String,
      required: [true, "شماره تلفن خود را وارد نمایید!"],
      unique: [true, "شما با این شماره تلفن حساب کاربری دارید!"],
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

  this.password = await bcrypt.hash(this.password, 12);
});

// Model
const UserModel = mongoose.model(`Users`, userSchema);
export default UserModel;
