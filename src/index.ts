import express from "express";
import cors from "cors";
import * as fs from "fs";

const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.post("/", async (req, res) => {
  try {
    const stringifiedRequest = JSON.stringify(req);
    const date = Date.now().toString();
    console.log(date);
    console.log(stringifiedRequest);

    fs.appendFileSync(`req_${date}.json`, stringifiedRequest);
  } catch (error) {
    console.log(error);
  }
  res.send({});
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
