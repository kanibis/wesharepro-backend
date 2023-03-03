const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/weshare-pro")

mongoose.connect("mongodb+srv://Gangareddy:Reddy12@cluster0.hjhorxm.mongodb.net/?retryWrites=true&w=majority", () => {console.log("database is connected")})