const express = require("express");
const router = express.Router();

const Book = require("../models/book.model");
const { body, validationResult } = require("express-validator");


module.exports = router.post(
  "",
  body("likes").isNumeric().withMessage("Not valid"),
  body("content").notEmpty().withMessage("content mandatory"),
  body("userId").notEmpty().withMessage("User Id mandatory"),
  body("publicationId").notEmpty().withMessage("Publication Id mandatory"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      const book = await Book.create(req.body);
      res.status(200).send({book: book});
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);