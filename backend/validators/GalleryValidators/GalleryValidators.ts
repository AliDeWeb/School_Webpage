import { celebrate, Joi, Segments } from "celebrate";

export const galleryValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().messages({
      "any.required": "عنوان را وارد نمایید",
    }),
    description: Joi.string(),
    imageDate: Joi.date().required().messages({
      "any.required": "تاریخی که تصویر ثبت شده است را وارد نمایید",
    }),
  }),
});
