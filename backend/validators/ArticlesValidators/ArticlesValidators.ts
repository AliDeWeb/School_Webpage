import { celebrate, Joi, Segments } from "celebrate";

export const articlesValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().messages({
      "string.base": "عنوان باید به صورت رشته باشد",
      "string.empty": "لطفا عنوان را وارد نمایید",
      "any.required": "لطفا عنوان را وارد نمایید",
    }),
    article: Joi.string().required().messages({
      "string.base": "متن باید به صورت رشته باشد",
      "string.empty": "لطفا متن را وارد نمایید",
      "any.required": "لطفا متن را وارد نمایید",
    }),
    category: Joi.string().valid("news", "event").required().messages({
      "string.base": "نوع مقاله باید به صورت رشته باشد",
      "any.only": "نوع مقاله باید یکی از مقادیر 'news' یا 'event' باشد",
      "any.required": "لطفا نوع مقاله را مشخص نمایید",
    }),
  }),
});
