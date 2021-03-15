const router = require("express").Router();
const axios = require("axios");
const TOKEN_URL = "https://api.askdata.com/security/domain/askdata/oauth/token";
const TOKEN_USERNAME = "luciferleftwing@gmail.com";
const TOKEN_PASSWORD = "veryuglypassword";
const TOKEN_BASIC = "ZmVlZDpmZWVk";
const TOKEN_GRANT_TYPE = "password";
const SWITCH_URL = "https://api.askdata.com/smartfeed/askdata/workspace/switch";
const DATA_URL = "https://api.askdata.com/smartinsight/data/nl/result";

const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${TOKEN_URL}?grant_type=${TOKEN_GRANT_TYPE}&&username=${TOKEN_USERNAME}&&password=${TOKEN_PASSWORD}`,
      {},
      { headers: { Authorization: `Basic ${TOKEN_BASIC}` } }
    );
    if (response.data) {
      return await response.data.access_token;
    }
  } catch (error) {
    console.log(error);
  }
};
const switchWorkSpace = async (agent_slug, token) => {
  try {
    const response = await axios.post(SWITCH_URL, { agent_slug }, { headers: { Authorization: `Bearer ${token}` } });
    if (response.data.id) return true;
    else return false;
  } catch (error) {
    console.log(error);
  }
};
const getData = async (nl, token) => {
  try {
    const response = await axios.post(DATA_URL, { nl, language: "en" }, { headers: { Authorization: `Bearer ${token}` } });

    if (response.status === 200) return await response.data;
    else return "No data found";
  } catch (error) {
    console.log(error);
  }
};
router.get("/", async (req, res, next) => {
  try {
    const token = await getAccessToken();
    if (!token) throw new Error("Unauthorized");
    //const workSpace = await switchWorkSpace("", token);
    // console.log(workSpace);
    else {
      const response = await getData(req.body.text, token);

      if (response) {
        res.send(response);
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
