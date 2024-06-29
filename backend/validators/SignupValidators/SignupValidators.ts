import { celebrate, Joi, Segments } from "celebrate";

const signupValidators = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages({
      "any.required": "نام الزامی است",
    }),

    lastName: Joi.string().required().messages({
      "any.required": "نام الزامی است",
    }),

    phoneNumber: Joi.string()
      .pattern(/^09\d{9}$/)
      .required()
      .messages({
        "string.pattern.base": "شماره تلفن باید معتبر باشد و با 09 شروع شود",
        "any.required": "شماره تلفن الزامی است",
      }),

    classNumber: Joi.string().pattern(/^10/).messages({
      "string.pattern.base": "شماره کلاس معتبر نیست",
    }),

    password: Joi.string().min(8).required().messages({
      "string.min": "رمز عبور باید حداقل ۸ کاراکتر باشد",
      "any.required": "رمز عبور الزامی است",
    }),

    birthday: Joi.date(),
  }),
});

export default signupValidators;
