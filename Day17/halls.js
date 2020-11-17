const express = require("express");
const hallData = require("./hallData");
const app = express();

app.get('/halls', (req, res) => {
    res.status(200).json({
        data: hallData,
    });
})

app.listen(3000);