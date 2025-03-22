import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDb.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


app.use((error,req,res,next)=>{
res.status(error.status || 500)
  res.json({
    message:error.message || " somthing went wrong ",
    status:error.status,
    stack:error.stack,
  });


});








// Start Server only if DB is connected
const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log("mongo conected")
    app.listen(port, () => {
      console.log(`✅ Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Server startup failed:", err.message);
  }
};

startServer();
