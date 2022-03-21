const Comment = require("../models/comment.model");
const { body, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();

module.exports = router.post(
  "",
  body("body").notEmpty().withMessage("body mandatory"),
  body("userId").notEmpty().withMessage("User Id mandatory"),
  body("bookId").notEmpty().withMessage("Book Id mandatory"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      const comment = await Comment.create(req.body);
      res.status(200).send({comment: comment});
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);
