const Joi = require("joi");

const signupvalidation = (req, res, next) => {
  const uservalid = Joi.object({
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(100).required(),
  });

  const { error } = uservalid.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: `bad request 2 : ${error.message}`,
      succes: false,
    });
  }
  next();
};
const loginvalidation = (req, res, next) => {
  const uservalid = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(100).required(),
  });

  const { error } = uservalid.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: `bad request : ${error.message}`,
      succes: false,
    });
  }
  next();
};

module.exports = {
  signupvalidation,
  loginvalidation,
};
