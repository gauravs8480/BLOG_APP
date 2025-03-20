import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema({


user:{
    type: Schema.Types.ObjectId,
    ref:"User",
    required:true
},


  img: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },

  desc: {
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  visit: {
    type: Boolean,
    default: Number,
  },
});

export default mongoose.model("Post", postSchema);
