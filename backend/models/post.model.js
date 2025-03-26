import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
    category: {
      type: String,
      default: "general",
    },
    content: {
      type: String,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Pre-save middleware to generate slug from title
postSchema.pre("save", async function (next) {
  if (this.title && !this.slug) {
    let slug = this.title.replace(/ /g, "-").toLowerCase();
    let existingPost = await mongoose.models.Post.findOne({ slug });
    let counter = 2;

    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await mongoose.models.Post.findOne({ slug });
      counter++;
    }

    this.slug = slug;
  }
  next();
});

export default mongoose.model("Post", postSchema);
