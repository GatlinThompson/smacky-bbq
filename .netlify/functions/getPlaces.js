// functions/getPlaces.js

const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${event.queryStringParameters.input}&key=AIzaSyDvnTtdpTq402kGwLhB3ivwChkLWB8v6yM`
    );

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching predictions:", error);
    return {
      statusCode: 500,
      body: "Error fetching predictions",
    };
  }
};
