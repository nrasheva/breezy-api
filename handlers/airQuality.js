const { axios } = require("../axios");

async function getAirQuality(req, res) {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    res
      .status(400)
      .json({ message: "Latitude and/or longitude parameter not provided" });
    return;
  }

  const baseURL = process.env.AIR_BASE_URL;
  const requestURL = `${baseURL}/v1/air-quality?latitude=${lat}&longitude=${lng}&current=current=european_aqi,pm10,pm2_5,carbon_monoxide,dust,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&timeformat=unixtime&timezone=auto`;

  try {
    const response = await axios.get(requestURL);

    res.json({ airQuality: response.data });
  } catch (error) {
    res
      .status(
        error.response && error.response.status ? error.response.status : 500
      )
      .json({ message: error });
  }
}

module.exports = { getAirQuality };
