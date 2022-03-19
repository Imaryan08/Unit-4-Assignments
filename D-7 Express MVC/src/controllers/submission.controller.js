const express = require("express");
const { default: mongoose } = require("mongoose");
const Submission = require("../models/submission.models");
const app = express();

app.get("", async (req, res) => {
  try {
    const submissions = await Submission.find().lean().exec();
    return res.status(200).send({ submissions: submissions });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

module.exports = app;
