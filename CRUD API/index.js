const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');


const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products",productRoute);

app.get('/', (req, res) => {
    res.send("Hello World! from Node API.");
})



mongoose.connect("mongodb+srv://admin:vsWCCOXZijZaECtx@backenddb.xaqkvlp.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Database Connected!");
        app.listen(3000,()=>{
            console.log("Server started on port 3000!");
        });
    })
    .catch((err) => {
        console.log("Connection failed. "+err);
    });