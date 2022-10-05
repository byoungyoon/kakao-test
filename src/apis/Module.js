const axios = require("axios");

const customAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": "a5e4527ff20b44ba2ff0ee7535a9b288",
  },
  baseURL: "https://huqeyhi95c.execute-api.ap-northeast-2.amazonaws.com/prod",
});

module.exports = customAxios;
