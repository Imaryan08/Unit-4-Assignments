const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

module.exports = router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send({ users });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router.post(
  "",
  body("firstName").not().isEmpty().withMessage("First name is required"),
  body("email").not().isEmpty().withMessage("email is required").isEmail().withMessage('email is not correct'),
  body("password").not().isEmpty().withMessage("password is required").isLength({min: 6}).withMessage('password should be atleast 6 characters'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ data: errors.array() });
      }
      const user = await User.create(req.body);
      return res.status(200).send({ user });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }
);
