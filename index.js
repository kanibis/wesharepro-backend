const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('./models/user')
// const path = require("path")
require('./config/config')

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/e-comm')
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.set("view engine", "ejs");


app.post('/register', async (req, res) => {
    let user = new User(req.body)
   
    let result = await user.save()
    result = result.toObject()
    delete result.password 
    res.send(result)
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            res.send(user)
        }
        else {
            res.send({result: 'No user found'})
        }
    }   
    else {
        res.send({result: 'No user found'})
    }     
})



app.listen(5000)










 // User.findOne({email:user.email},function(err,user){
    //     if(user) return res.status(400).json({ message :"email exits"});
  
    //     user.save((err,doc)=>{
    //         if(err) {console.log(err);
    //             return res.status(400).json({ success : false});}
    //         res.status(200).json({
    //             succes:true,
    //             user : doc
    //         });
    //     });
    // });