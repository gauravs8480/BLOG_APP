import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js"
import connectDB from "./lib/connectDb.js";
import { clerkMiddleware, requireAuth } from '@clerk/express';
import cors from "cors";
// Load environment variables
dotenv.config();

const app = express();
app.use(cors(process.env.CLIENT_URL));
const port = process.env.PORT || 3000;

app.use(clerkMiddleware())
app.use("/webhooks",webhookRouter);
// Middleware
app.use(express.json()); 



// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});






// app.get("/protect",(req,res)=>{
//   const{userId}= req.auth;
//   if(!userId){
//     return res.status(401).json("not conected")

//   }
//    res.status(200).json("content")
// }); 


// app.get("/protect2",requireAuth,(req,res)=>{
//   const{userId}= req.auth;
//   if(!userId){
//     return res.status(401).json("not conected")

//   }
//    res.status(200).json("content")
// }); 





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
