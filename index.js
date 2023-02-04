const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bankModal = require("./modals/bank");
const accountRoutes = require("./routes/account");
const bankRoutes = require("./routes/bank");
const userRoutes = require("./routes/user");
const cors = require("cors");

const server = express();
const handleError = (req,res,next)=>{
    console.log("Error page executed");
    next();
}

server.use(bodyParser.json());
server.use(cors());


//routes
server.use(accountRoutes);
server.use(bankRoutes);
server.use(userRoutes);
server.get("*",handleError,(req,res)=>{res.send("404 page not found")})



mongoose.connect("mongodb+srv://codetrainUser:1234567890@cluster0.6e8egnx.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(result=>{

    server.listen(8080,"localhost",()=>{console.log("server is ready")});
}).catch(err=> console.log(err));