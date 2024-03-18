require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { router } = require("./router");
const { initializeMongoose } = require("./database");

const app = express();
const port = 3000;

initializeMongoose();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
