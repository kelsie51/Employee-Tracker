const express = require('express');
const bodyParser = require('body-parser');
// create express 
const app = express();
// Setup  port
const port = process.env.PORT || 5000;
// parse requests
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests 
app.use(bodyParser.json())
// define route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// listen 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});