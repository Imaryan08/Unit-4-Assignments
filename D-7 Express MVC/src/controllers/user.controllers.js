const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/user.model");
const app = express();

app.get("", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
      return res.status(200).send({ users: users });
    } catch (err) {
      return res.status(500).send({ err: err.message });
    }
  });

app.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send({ user: user });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

app.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).send({ user: user });
    } catch (err) {
      return res.status(500).send({ err: err.message });
    }
  });

module.exports = app;
