const express = require("express");
const { login, register } = require("./handlers/authentication");
const { getAirQuality } = require("./handlers/airQuality");
const { getLocationCoordinates } = require("./handlers/locationCoordinates");
const { authMiddleware } = require("./middleware");
const { createLocation } = require("./handlers/profile");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

router.get("/getAirQuality", getAirQuality);
router.get("/getLocationCoordinates", getLocationCoordinates);

router.post("/profile", authMiddleware, createLocation);

router.get("/", (req, res) =>
  res.status(200).json({ status: `Breezy API running` })
);

module.exports = { router };
