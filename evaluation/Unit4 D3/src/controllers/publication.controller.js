const express = require("express");
const router = express.Router();

const Publication = require("../models/publication.model");
const { body, validationResult } = require("express-validator");

module.exports = router.post(
  "",
  body("name").notEmpty().withMessage("Name mandatory"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      const publication = await Publication.create(req.body);
      res.status(200).send({publication: publication});
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);