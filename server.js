// Step 1: Import the parts of the module you want to use

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/webhook", (req, res) => {
  console.log("webhookkkkk");
  console.log(req);
  console.log(req.body);
  res.status(200).send(); // Responding is important
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
