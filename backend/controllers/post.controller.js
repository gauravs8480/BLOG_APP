import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";
import dotenv from 'dotenv';
dotenv.config();
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "username email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug }).populate(
      "user",
      "username email"
    );
    if (!post) {
      return res.status(404).json("Post not found");
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
      return res.status(401).json("Not Authenticated");
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json("User not found");
    }

  
     
   //  console.log("Request Body:", req.body);

   
    if (!req.body.title) {
      return res.status(400).json({ error: "Title is required" });
    }

    // Generate slug from title
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
    let existingPost = await Post.findOne({ slug });
    let counter = 2;

    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }

    // Create the new post with the generated slug
    const newPost = new Post({
      user: user._id,
      slug, // Add the generated slug
      ...req.body,
    });

    const post = await newPost.save();
    res.status(201).json(post); // Use 201 for resource creation
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
      return res.status(401).json("Not Authenticated");
    }

    const user = await User.findOne({ clerkUserId }); // Fixed typo: findone to findOne
    if (!user) {
      return res.status(404).json("User not found");
    }

    const post = await Post.findOne({ _id: req.params.id, user: user._id });
    if (!post) {
      return res.status(403).json("You can only delete your own post");
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// if (!process.env.IK_URL_ENDPOINT) {
//   throw new Error("Missing ImageKit URL endpoint configuration");
// }

// if (!process.env.IK_PUBLIC_KEY) {
//   throw new Error("Missing ImageKit public key configuration");
// }

// if (!process.env.IK_PRIVATE_KEY) {
//   throw new Error("Missing ImageKit private key configuration");
// }

// console.log("ImageKit URL Endpoint:", process.env.IK_URL_ENDPOINT);
// console.log("ImageKit Public Key:", process.env.IK_PUBLIC_KEY);
// console.log("ImageKit Private Key:", process.env.IK_PRIVATE_KEY);

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  } catch (error) {
    console.error("ImageKit authentication error:", error.message);
    res.status(500).json({ error: "Failed to get upload authentication" });
  }
};