const express = require("express");

let app= express();


app.use(express.static("public"));


app.listen(3000,()=>{
    console.log("Server up and running on port 3000");
})