const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Imaryan08:masai073@cluster0.3kn8f.mongodb.net/orkut?retryWrites=true&w=majority"
  );
};

//creating user schema

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//creating model for userSchema

const User = mongoose.model("user", userSchema);

// creating post schema

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// creating model for postSchema

const Post = mongoose.model("post", postSchema);

// creating comment schema

const commentSchema = mongoose.Schema(
  {
    body: { type: String, required: true },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// creating model for userSchema

const Comment = mongoose.model("comment", commentSchema);


// getting all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send({ users: users });
  } catch (err) {
    res.status(500).send({ message: "404 Error Found" });
  }
});


// getting all posts

app.get("/posts", async (req, res) => {
  try {
    const post = await Post.find().lean().exec();
    res.status(200).send({ post: post });
  } catch (err) {
    res
      .status(500)
      .send({ message: "404 Error while fetching data From server" });
  }
});

// getting all comments
app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().lean().exec();
    return res.status(200).send({ comments: comments });
  } catch (err) {
    return res.status(500).send({ err: err });
  }
});

//creating post

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ user: user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

// getting single user Data
// app.get("/users/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//     const user = await User.findById(req.params.id).lean().exec();
//     return res.status(200).send({ user: user });
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// find by name
app.get("/users/:fname", async (req, res) => {
  try {
      console.log(req.params.fname);
      const user = await User.findOne({ firstName : req.params.fname }).lean().exec();
      return res.status(500).send({ user: user });
    } catch (err) {
    return res.status(500).send({ errorMessage: err.message });
  }
});



// update data

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

//Delete data

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ errMessage: err.message });
  }
});

app.listen(port, async () => {
  try {
    await connect();
    console.log(`server is running on port:${port}`);
  } catch (err) {
    console.log(`rampukar- ${err}`);
  }
});
