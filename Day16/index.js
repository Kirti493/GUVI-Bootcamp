const express = require("express");
const fs = require("fs");
const app = express();
const timestamp = require('time-stamp');
 

//=> 2018-10-26
// app
//     .get("/", (request, response) => {
//     response.send("<h1>Home Page!</h1>");
// })

let ts = timestamp('YYYY-MM-DD mm:ss')
let dts = timestamp.utc('DD:mm:ss')
console.log(ts);

//creating a file named newfile.txt
fs.appendFile((`${ts}`+'.txt'), dts, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

app.listen(8000)