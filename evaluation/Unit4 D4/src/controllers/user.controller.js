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


