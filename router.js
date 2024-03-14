const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
  res.status(200).json({ status: `Breezy API running` })
);

module.exports = { router };