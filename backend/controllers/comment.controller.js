import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";

// Helper function to validate ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const getPostComments = async (req, res) => {
  try {
    const { postId } = req.params;

    if (!isValidObjectId(postId)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    const comments = await Comment.find({ post: postId })
      .populate("user", "username img")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

export const addComment = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const { postId } = req.params;

    if (!clerkUserId) {
      return res.status(401).json({ error: "Not authenticated!" });
    }

    if (!isValidObjectId(postId)) {
      return res.status(400).json({ error: "Invalid post ID" });
    }

    if (!req.body.text || !req.body.text.trim()) {
      return res.status(400).json({ error: "Comment text is required" });
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newComment = new Comment({
      text: req.body.text,
      user: user._id,
      post: postId,
    });

    const savedComment = await newComment.save();

    const populatedComment = await Comment.findById(savedComment._id).populate(
      "user",
      "username img"
    );

    res.status(201).json(populatedComment);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Failed to add comment" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const { id } = req.params;

    if (!clerkUserId) {
      return res.status(401).json({ error: "Not authenticated!" });
    }

    if (!isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid comment ID" });
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role === "admin") {
      const deletedComment = await Comment.findByIdAndDelete(id);
      if (!deletedComment) {
        return res.status(404).json({ error: "Comment not found" });
      }
      return res.status(200).json({ message: "Comment has been deleted" });
    }

    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const deletedComment = await Comment.findOneAndDelete({
      _id: id,
      user: user._id,
    });

    if (!deletedComment) {
      return res.status(403).json({ error: "You can delete only your comment!" });
    }

    res.status(200).json({ message: "Comment has been deleted" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
};