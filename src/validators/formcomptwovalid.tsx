import Joi from "joi";

const formCompTwoValid = Joi.object({
    username: Joi.string().pattern(/w{1,}/).required().messages({
        "string.pattern.base":"username must be longer then 1 symbol"
    }),
    password: Joi.string().min(4).max(10).required().messages({
        "string.min":"password must be longer then 4 symbols",
        "string.max":"password must be longer then 10 symbols"
    }),
    age: Joi.number().min(18).max(125).messages({
        "number.min":"piece of shit go avay!!!",
        "number.max":"I think you are already dead"
    }),
});

export {formCompTwoValid};