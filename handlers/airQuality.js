const { axios } = require("../axios");

async function getAirQuality(req, res) {
  const { lat, lng } = req.query;

  if (!lat) {
    res.status(400).json({ message: "latitude parameter not provided" });
    return;
  } else if (!lng) {
    res.status(400).json({ message: "longitude parameter not provided" });
    return;
  }

  try {
    const airQuality = await axios.get(
      `/v1/air-quality?latitude=${lat}&longitude=${lng}&current=european_aqi,pm10,pm2_5,carbon_monoxide,dust,uv_index,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=european_aqi,european_aqi_pm2_5,european_aqi_pm10&timeformat=unixtime&timezone=auto`
    );

    const response = {
      airQuality: airQuality,
    };

    res.send(response);
  } catch (error) {
    res
      .status(
        error.response && error.response.status ? error.response.status : 500
      )
      .json({ message: error });
  }
}

module.exports = { getAirQuality };
