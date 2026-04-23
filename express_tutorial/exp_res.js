const {products,people} = require('./data.js');  

const express = require('express');

const app = express();

app.get('/products  ', (req, res)=>{
    res.status(200).json(products);
});

app.get('/people', (req, res)=>{
    res.status(200).json(people);
});

app.listen(8000, ()=>{
    console.log("res.json() method is used to send a JSON response. it converts a JavaScript object or value to a JSON string and sends it as a response to the client. it also sets the content-type header to application/json so that the client knows that the response is in JSON format.");
})