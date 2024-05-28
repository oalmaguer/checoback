// Step 1: Import the parts of the module you want to use

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;
const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/webhook", (req, res) => {
  console.log("webhookkkkk");
  console.log(req.body);
  var data = typeof req.body == 'string' ? JSON.parse(req.body) : req.body; 
  console.log(data);
  res.status(200).send(); // Responding is important
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
