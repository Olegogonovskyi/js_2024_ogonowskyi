import Joi from "joi";

export const FormLoginValidator = Joi.object({
    username:
    Joi.string().pattern(/^.{2,}$/).required().messages({
        "string.pattern.base": "мор зен ван симбол маст бі"
    }),
    password:
        Joi.string().pattern(/^.{2,}$/).required().messages({
            "string.pattern.base": "мор зен ван симбол маст бі"
        })
})