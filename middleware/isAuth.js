const jwt = require("jsonwebtoken");
const userSchema = require("../models/user");

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "hello");
    if (!decode) {
      res.status(400).send("you are not auth");
    }else{
        const user = await userSchema.findById(decode.id);
        req.user = user;
        next();
    }
    
  } catch (error) {
    res.status(500).send(error);
  }
};