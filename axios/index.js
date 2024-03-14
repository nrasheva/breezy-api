const axios = require('axios');

const baseURL = 'https://air-quality-api.open-meteo.com/v1/air-quality';
const timeout = 10000;

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;

module.exports = { axios };