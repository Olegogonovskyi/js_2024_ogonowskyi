import Joi from "joi";

export const validationUser = Joi.object({
    title:
        Joi.string()
            .pattern(/^[a-zA-Z]{1,15}(?: [a-zA-Z]{1,15})+$/)
            .required()
            .messages({
                "string.pattern.base": "Enter only words without numbers in the field"
            }),
    body:
        Joi.string()
            .pattern(/^[a-zA-Z]{1,15}(?: [a-zA-Z]{1,15})+$/)
            .required()
            .messages({
                "string.pattern.base": "Enter only words without numbers in the field"
            }),
    userId:
        Joi.number()
            .min(1)
            .max(10)
            .required()
            .messages({
                "number.min":"number must be more then 0",
                "number.max":"number must be less then 10"
            })

})