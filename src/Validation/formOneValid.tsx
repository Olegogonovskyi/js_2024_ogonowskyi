import Joi from "joi";

export const formOneValid = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z0-9]{1,10}$/).required().messages({
        "string.pattern.base": "регулярного виразу, який відповідає одному слову, що містить від 1 до 10 символів, де можуть бути як букви, так і цифри"
    }),
    email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required().messages({
        "string.pattern.base": "ти впевнений, що email ввів?"
    }),
    age: Joi.number().min(18).max(125).required().messages({
        "number.min":"шпіндюк, іди мультики дивитись",
        "number.max":"нашо тобі то, ти вже, мабуть, мертвий"
    })
    })