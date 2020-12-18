const express=require('express');
// const cors= require("cors");
const app = express();
const PORT =5000;
const mongoose=require('mongoose');
const {MONGOURI}= require('./keys');






mongoose.connect(MONGOURI,{ useNewUrlParser: true , useUnifiedTopology: true } )
mongoose.connection.on("connected",()=>{
    console.log("coonected to mongo db")
})
mongoose.connection.on("error",(err)=>{
    console.log("err connecting",err)
})

require("./models/user")
require("./models/post")


app.use(express.json())
// app.use(cors())
app.use(require("./routes/auth") )
app.use(require("./routes/post") )






app.listen(PORT,()=>{
    console.log("server is running on ",PORT)
})