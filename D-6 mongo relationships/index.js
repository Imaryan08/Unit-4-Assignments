const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Imaryan08:masai073@cluster0.3kn8f.mongodb.net/lib?retryWrites=true&w=majority"
  );
};

// Author Schema
const authorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Author = mongoose.model("author", authorSchema);

// Section Schema
const sectionSchema = new mongoose.Schema(
  {
    sectionName: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Section = mongoose.model("section", sectionSchema);

// Book Schema

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'author'},
    sectionId: {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'section'},
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Book = mongoose.model("book", bookSchema);

// CRUD for author
app.post("/authors", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(200).send({ author: author });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find().lean().exec();
    return res.status(200).send({ authors: authors });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.patch("/authors/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({ author: author });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.delete("/authors/:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    return res.status(200).send({ author: author });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

// CRUD for section
app.post("/sections", async (req, res) => {
  try {
    const sections = await Section.create(req.body);
    return res.status(200).send({ sections: sections });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.get("/sections", async (req, res) => {
  try {
    const section = await Section.find().lean().exec();
    return res.status(200).send({ section: section });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.patch("/sections/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({ section: section });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.delete("/sections/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    return res.status(200).send({ section: section });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

// CRUD for books
app.post("/books", async (req, res) => {
  try {
    const books = await Book.create(req.body);
    return res.status(200).send({ books: books });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});
app.get("/books", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    return res.status(200).send({ book: book });
  } catch (err) {
    return res.status(500).send({ err: err.message, info: err });
  }
});

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log(`server is up and running on port:${port}`);
  } catch (err) {
    console.log(`Aryan- ${err}`);
  }
});
