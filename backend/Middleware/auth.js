const jwt = require("jsonwebtoken");

const ensureauth = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      message: "unauthorized, jwt token is require",
    });
  }

  try {
    const decoder = jwt.verify(auth, process.env.JWT);
    req.user = decoder;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "unauthorized, jwt token is require !",
    });
  }
};

module.exports = ensureauth;
