const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const res = require("express/lib/response");

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
    .trim()
    .not()
    .isEmpty()
    .withMessage("firstname cannot be empty")
    .isLength({ min: 4 })
    .withMessage("firstname must be atleast 4 chracters"),
  body("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("lastname cannot be empty")
    .isLength({ min: 4 })
    .withMessage("lastname must be atleast 4 chracters"),
  body("email")
    .isEmail()
    .withMessage("not a valid email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) throw new Error("Email is already taken");

      return true;
    }),
  body("pincode")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Pincode cannot be empty")
    .isLength({ min: 6, max: 6 })
    .withMessage("pincode length should be 6 "),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("age is required")
    .isNumeric()
    .withMessage("age should be number")
    .custom(async (value) => {
        // let age = Number(value);
      if (+value < 1 || +value > 100)
        throw new Error("age should be between 1 and 100");
    }),
  body("gender").trim().not().isEmpty().withMessage("gender is required")
    .custom( async(value) => {
        if(value !== "male" && value !== "female" && value !== 'others')
            throw new Error("gender is not correct")
    }),
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
