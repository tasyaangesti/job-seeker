const { verifyToken } = require("../helper/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    let token = req.headers.authorization;
    console.log(token, ">> token dr authen");

    if (!token) {
      //   console.log("masuk1");
      throw { name: "Invalid Token" };
    }
    if (token.slice(0, 7) !== "Bearer ") {
      //   console.log("masuk2");
      throw { name: "Invalid Token" };
    }

    token = token.slice(7);
    let payload = verifyToken(token);

    let user = await User.findByPk(payload.id);
    if (!user) {
      //   console.log("masuk3");
      throw { name: "Invalid Token" };
    }

    req.user = {
      id: user.id,
    };

    next();
  } catch (error) {
    console.log(error);
    if (error.name === "Invalid Token" || error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid Token" });
    }
    res.status(500).json(error);
  }
}

module.exports = authentication;
