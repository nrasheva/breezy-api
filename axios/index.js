const axios = require('axios');

const baseURL = process.env.AIR_BASE_URL;
const timeout = 10000;

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;

module.exports = { axios };