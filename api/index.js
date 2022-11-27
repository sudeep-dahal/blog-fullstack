import express from "express";
import cors from "cors"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";

const app=express()

// const corsOptions = {
//     origin: "*",
//     credentials: true, 
//     optionSuccessStatus: 200,
//   };
  


app.use(cors())
app.use(express.json()) 
app.use(cookieParser())

// app.get('/',(req,res)=>res.send("SUccess"))


app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)





const PORT=4000


app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`)
})