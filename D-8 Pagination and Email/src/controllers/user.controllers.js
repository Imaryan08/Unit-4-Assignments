const express = require("express");

const router = express.Router();

const User = require("../models/user.models");

const transporter = require("../config/mail");

router.get("/", async (req, res) => {
  try {
      const page = req.query.page || 1;
      let pagesize = req.query.pagesize || 10;
      if(pagesize > 50)
         pagesize = 50; 

    //if page = 1 then data should be from 1 to 30
    //if page = 2 then data should be from 31 to 60

    const skip = (page - 1) * pagesize;
    // page = 1 ==> skip = (1-1) * 30 ==> 0
    // page = 2 ==> skip = (2-1) * 30 ==> 30

    const users = await User.find()
    .skip(skip)
    .limit(pagesize)
    .lean()
    .exec();

    const totalPages = Math.ceil((await User.find().countDocuments().lean().exec()) / pagesize);

    return res.status(200).send({ users, totalPages });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


router.post('/', async (req,res) => {
    try{
        const user = await User.create(req.body);
        transporter.sendMail({
            from: '"Amazon admin" <admin@amazon.com>', 
            to: user.email, 
      subject: `Welcome to ABC System ${req.body.first_name} ${req.body.last_name}`,
      text: `Hi ${req.body.first_name}, Please confirm your email address. `,
    });
    return res.status(200).send({message: "User created succesfully"});
}catch(err){
      return res.status(500).send(err.message);
  }
});

module.exports = router;
