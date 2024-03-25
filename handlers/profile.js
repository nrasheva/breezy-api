const { User } = require("../models/User");

async function createLocation(req, res) {
  const authorId = req.header("id");
  const { locationName } = req.body;

  if (!locationName) {
    return res.status(400).json({ message: "Location name not provided" });
  }

  try {
    const user = await User.findById(authorId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.location = locationName;

    // Save the updated user
    await user.save();

    res.status(201).json({ message: "Location added successfully" });
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getLocations(req, res) {
  const userId = req.header("id");

  if (!userId) {
    return res.status(400).json({
      message: "User ID not available. Please ensure you're logged in.",
    });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the locations from the user's profile
    res.json(user.location);
  } catch (error) {
    console.error("Error fetching user locations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteLocation(req, res) {
  const userId = req.header("id");

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.location = "";

    // Save the updated user profile
    await user.save();

    res.status(200).json({ message: "Location deleted successfully." });
  } catch (error) {
    console.error("Error deleting location:", error);
    res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = { createLocation, getLocations, deleteLocation };
