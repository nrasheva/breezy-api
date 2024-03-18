const express = require("express");
const { login, register } = require("./handlers/authentication");
const { getAirQuality } = require("./handlers/airQuality");
const { getLocationCoordinates } = require("./handlers/locationCoordinates");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.get("/getAirQuality", getAirQuality);
router.get("/getLocationCoordinates", getLocationCoordinates);

router.get("/", (req, res) =>
  res.status(200).json({ status: `Breezy API running` })
);

module.exports = { router };
