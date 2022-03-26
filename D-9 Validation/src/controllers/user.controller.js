const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

module.exports = router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send({ users });
  } catch {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = router.post(
  "/",
  body("firstName")
    .not()
    .isEmpty()
    .withMessage("firstname is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ data: errors.array() });
    }
    try {
      const user = await User.create(req.body);
      return res.status(200).send({ user });
    } catch (err) {
      return res.status(500).send({ err: err.message });
    }
  }
);
