const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { validateCredentials } = require("../utils");

async function register(req, res) {
  const { email, password } = req.body;

  const issues = validateCredentials(email, password);

  if (issues.length) {
    res.status(400).json({ message: issues });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(409).json({ message: "email already in use" });
      return;
    }

    const hash = await bcrypt.hash(password, 10);

    await User.create({ email, password: hash });

    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { register };
