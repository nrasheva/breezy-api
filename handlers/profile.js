const { Location } = require("../models/Location");

async function createLocation(req, res) {
  const authorId = req.header("id");
  const { locationName, parent } = req.body;

  if (!locationName || !locationName.length) {
    res.status(400).json({ message: "content not provided" });
    return;
  }

  try {
    const newLocation = {
      author: authorId,
      location: locationName,
    };

    if (parent) {
      newLocation.parent = parent;
    }

    await Location.create(newLocation);

    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}




module.exports = { createLocation, getLocations };
