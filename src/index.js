const MatchingApis = require("./apis/Matching.apis");

const onDefault = async (problem) => {
  let time, authKey;

  await MatchingApis.start({ problem: problem }).then((response) => {
    authKey = response.data.auth_key;
    time = response.data.time;
  });
};

onDefault(2);
