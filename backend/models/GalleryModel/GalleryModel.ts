import mongoose from "mongoose";

const { Schema } = mongoose;

const gallerySchema = new Schema({
  image: {
    type: String,
    required: [true, "تصویر را آپلود نمایید"],
  },
  title: {
    type: String,
    required: [true, "عنوان را وارد نمایید"],
  },
  description: {
    type: String,
  },
  imageDate: {
    type: Date,
    default: Date.now(),
    required: [true, "تاریخی که تصویر ثبت شده است را وارد نمایید"],
  },
  Photographer: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "عکاس نامشخص است"],
  },
  isAccepted: {
    type: Boolean,
    default: false,
    select: false,
  },
});

// Middlewares
gallerySchema.pre(/^find/, function (next) {
  // @ts-ignore
  this.populate({
    path: "Photographer",
    select: "name lastName classNumber",
  });

  next();
});

const GalleryModel = mongoose.model("Gallery", gallerySchema);

export default GalleryModel;
