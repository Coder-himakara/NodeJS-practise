const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World! from Node API.");
})

app.post('/addProduct', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
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