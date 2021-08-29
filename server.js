const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/users');

const app = express();
app.use(express.json());
userRoutes(app);

mongoose.connect("mongodb+srv://user2:Welcome123@cluster0.lfyqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(
    ()=> console.log("MongoDB connected successfully")
)

app.get('/', async(req, res)=>{
    return res.send("Hello Freelancer!");
})

app.listen(5001, ()=>{
    console.log("Node application is running in http://localhost:5001");
});