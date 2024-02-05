// Budget API

const express = require('express');

const app = express();
const budget =require("./data.json");
const port = 3000;

app.use("/",express.static("public"));


console.log(budget)

app.get("/hello",(req,res)=>{
    res.send("Hello Bhanu");
})

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
