import mongoose from "mongoose";
const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "لطفا عنوان را وارد نمایید"],
    },
    article: {
      type: String,
      required: [true, "لطفا متن را وارد نمایید"],
    },
    image: {
      type: String,
      required: [true, "لطفا تصویر را آپلود نمایید"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "نویسنده مشخص نیست"],
    },
    category: {
      type: String,
      required: [true, "نوع مقاله مشخص نیست"],
      enum: ["news", "event"],
    },
  },
  {
    timestamps: true,
  },
);

const ArticleModel = mongoose.model(`Articles`, articleSchema);

export default ArticleModel;
