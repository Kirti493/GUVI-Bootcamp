const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

let customers = [];

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


    app.post('/customer', (req, res) => {
    const customer = req.body;
    
    console.log(customer);
    customers.push(customer);

    res.send('Customer is added to the database');

    app.get('/customers', (req, res) => {
        res.json(customers)
    })
});


app.listen(port)