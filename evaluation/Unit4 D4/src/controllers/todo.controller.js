const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Todo = require("../models/todo.model");

module.exports = router.get("", async (req, res) => {
  try {
    const todos = await Todo.find().populate('userId').lean().exec();
    return res.status(200).send({ todos });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router.post(
  "",
  body("title").not().isEmpty().withMessage("title is required").isLength({min: 10, max: 200}).withMessage('todo should be atleast 10 chracters long'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ data: errors.array() });
      }
      const todo = await Todo.create(req.body);
      return res.status(200).send({ todo });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }
);
