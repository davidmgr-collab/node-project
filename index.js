const express=require('express');
const cors=require('cors');
require('dotenv').config();
const studentRoutes=("./routes/students");
const app=express();
const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    console.log('hello world');
});
app.use(cors());
app.use(express.json());
app.use("/api" , studentRoutes);
app.listen(port, ()=>{
    console.log('server is running on http://localhost:3000');
});