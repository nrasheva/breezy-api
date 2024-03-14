import express from "express";
import cors from "cors";

const { initializeMongoose } = require("./database");
const router = express.Router();

const app = express();
const port = 3000;

initializeMongoose();

app.use(cors(), router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
