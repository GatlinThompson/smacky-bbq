const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const value = event.queryStringParameters.input;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=AIzaSyDvnTtdpTq402kGwLhB3ivwChkLWB8v6yM`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.predictions.slice(0, 4)),
    };
  } catch (error) {
    console.error("Error fetching predictions:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
