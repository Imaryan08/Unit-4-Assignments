const express = require("express");
const router = express.Router();

const {validationResult, body} = require('express-validator');

const User = require("../models/user.model");

router.post(
  "",
  body("firstname")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should be length of atleast 3 char and max of 30 char"),
  body('lastName')
    .isLength({min:3, max: 30})
    .withMessage("Name should be length of atleast 3 char and max of 30 char"),
  body('age')
    .notEmpty()
    .withMessage('age mandatory')
    .isNumeric({min:1, max:150})
    .withMessage('age should be between 1 and 150'),
  body('email')
    .notEmpty()
    .withMessage('Email mandatory')
    .isEmail()
    .withMessage('Not valid email')
    .custom((value) => {
        const email = User.findOne({email: value}).lean().exec();
        if(email){
            throw new Error('email already exist');
        }
    }),
  async (req, res) => {
    try {
      const user = User.create(req.body);
      res.status(200).send({ user: user });
    } catch (err) {
      res.status(500).send({ err: err.message });
    }
  }
);

module.exports = router;