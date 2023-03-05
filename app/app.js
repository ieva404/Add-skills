const express = require("express");
const cors = require("cors");

app.use(cors());
const app = express();
app.use(express.json());

app.get("/skills", (req, res) => {
  res.json([
    { skill: "hard-working" },
    { skill: "team-player" },
    { skill: "quick-learner" },
    { skill: "result-oriented" },
  ]);
});

app.listen(3000, () => {
  console.log("my -add skill- server started");
});
