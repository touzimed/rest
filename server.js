const express=require('express');
const mongoose=require('mongoose');
const app = express()
const dotenv=require('dotenv');
dotenv.config()
app.use(express.json())
app.use("/api",require("./routes/userRouter"))
mongoose.connect(process.env.URL,
{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
     console.log('Connected to MongoDB Atlas');
     
   })
   .catch((error) => {
     console.error('Error connecting to MongoDB Atlas:', error);
   });

   app.listen(process.env.PORT||8000,()=>console.log("listening on port 5000"));
