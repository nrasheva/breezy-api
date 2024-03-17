const { axios } = require("../axios");

async function getlocationCoordinates(req, res) {
  const { location } = req.query;

  if (!location) {
    res.status(400).json({ message: "location parameter not provided" });
    return;
  }

  const encodedLocation = encodeURIComponent(location);

  const URL = `https://api.geoapify.com/v1/geocode/search?text=${encodedLocation}&apiKey=${process.env.GEOAPIFY_KEY}`;

  try {
    const locationCoordinates = await axios.get(URL);

    const response = {
      locationCoordinates: locationCoordinates,
    };

    res.send(response);
  } catch (error) {
    console.error("Failed to fetch location coordinates:", error); // Log the actual error
    res
      .status(
        error.response && error.response.status ? error.response.status : 500
      )
      .json({ message: "Failed to fetch location coordinates" });
  }
}

module.exports = { getlocationCoordinates };
