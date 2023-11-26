import Joi from 'joi';

const userValidationSchema = Joi.object({
  userId: Joi.number().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }).required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().required(),
  hobbies: Joi.array().items(Joi.string()).required(),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
});

export const userValidationSchemaForPutReq = Joi.object({
  userId: Joi.number(),
  username: Joi.string(),
  password: Joi.string(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  age: Joi.number(),
  email: Joi.string().email(),
  isActive: Joi.boolean(),
  hobbies: Joi.array().items(Joi.string()),
  address: Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }),
});

export default userValidationSchema;
