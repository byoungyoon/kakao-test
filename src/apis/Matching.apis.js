const customAxios = require("./Module");

module.exports = {
  start: async (problem) => await customAxios.post("/start", problem),
  waiting: async (authKey) =>
    await customAxios.get("/waiting_line", isKey(authKey)),
};

const isKey = (authKey) => {
  return {
    headers: {
      Authorization: authKey,
    },
  };
};
