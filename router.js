const express = require("express");
const { login, register } = require("./handlers/authentication");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.get("/", (req, res) =>
  res.status(200).json({ status: `Breezy API running` })
);

module.exports = { router };
