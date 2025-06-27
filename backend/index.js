const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let people = [];

app.post("/api/people", (req, res) => {
  people.push(req.body);
  res.status(201).send("Person added");
});

app.get("/api/people", (req, res) => {
  res.json(people);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
