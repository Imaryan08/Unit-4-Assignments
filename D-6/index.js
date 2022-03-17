const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Imaryan08:masai073@cluster0.3kn8f.mongodb.net/library?retryWrites=true&w=majority"
  );
};

// Section Schema
const sectionSchema = new mongoose.Schema(
  {
    sectionName: { type: String, required: true },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Section = mongoose.model("section", sectionSchema);


// author schema
const authorSchema = mongoose.Schema(
  {
    // bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Authors = mongoose.model("author", authorSchema);


// Book Schema
const bookschema = new mongoose.Schema(
  {
    bookName: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
      unique: false,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const Books = mongoose.model("book", bookschema);



// checked out
const checkedOutSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
    checkedOutTime: { type: Date, default: null },
    checkedInTime: { type: Date, default: null },
  },
  {}
);

const CheckedOut = mongoose.model("checkedout", checkedOutSchema);

//  CRUD OPERATIONS

// Sections
app.post("/sections", async (req, res) => {
  try {
    const section = await Section.create(req.body);
    return res.status(201).send({ section: section });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/sections", async (req, res) => {
  try {
    const sections = await Section.find().lean().exec();
    return res.status(200).send({ sections: sections });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

//  Author

app.get("/authors", async (req, res) => {
  try {
    const authors = await Authors.find().lean().exec();
    return res.status(200).send({ authors: authors });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

app.post("/authors", async (req, res) => {
  try {
    const authors = await Authors.create(req.body);
    return res.status(200).send({ authors: authors });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});


// Books

app.get("/books", async (req, res) => {
  try {
    const books = await Books.find().lean().exec();
    return res.status(200).send({ boooks: books });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const books = await Books.create(req.body);
    return res.status(200).send({ boooks: books });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
});



app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is up and running on port :${port}`);
  } catch (err) {
    console.log({ errorMessage: err });
  }
});
