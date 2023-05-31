const {validationResult,body}=require('express-validator')

exports.registervalidation = [
    body("email", "pls enter a valid email").isEmail(),
    body("pass", "at least 6 caracters").isLength({ min: 6 }),
  ];
  exports.loginvalidation = [
    body("email", "pls enter a valid email").isEmail(),
    body("pass", "at least 6 caracters").isLength({ min: 6 }),
  ];
  exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };