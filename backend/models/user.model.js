import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema=new Schema({

username:{
    type:String,
    required:true,
    unique:true,
},
email:{
    type:String,
    required:true,
    unique:true,
},
img:{
    type:String,
},
savedPosts:{
    type:[String],
    defaukt:[],
},

},{timestamps:true})


export default mongoose.model("User",userSchema)