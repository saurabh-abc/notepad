const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send("API is running")
})
app.listen(PORT,console.log(`server is run on ${PORT}`));