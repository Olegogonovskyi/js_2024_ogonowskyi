import Joi from "joi";

export const validationUser = Joi.object({
    name:
        Joi.string()
            .pattern(/^[A-Z][a-zA-Z]{0,14} [A-Z][a-zA-Z]{0,14}$/)
            .required()
            .messages({
                "string.pattern.base": "All words must begin with a capital letter and in English"
            }),
    username:
        Joi.string()
            .pattern(/^[A-Z][a-zA-Z]{0,14}$/)
            .required()
            .messages({
                "string.pattern.base": "Word must begin with a capital letter. It must be only one word"
            }),
    email:
        Joi.string()
            .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
        "string.pattern.base": "Word must contain with '@' and domenname from two or more letters "
    })

})