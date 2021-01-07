const mongoose = require('mongoose');
const {ObjectId}= mongoose.Schema.Types


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"https://res.cloudinary.com/di3spqvdb/image/upload/v1609835909/noimage_t9nfnh.png",
        // required:true
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]

})

mongoose.model("User",userSchema)