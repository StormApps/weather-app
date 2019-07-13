const request = require('request');

const geocode = (address, callback) => {
  const urlGeoCoding =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiZ29rdTQ3IiwiYSI6ImNqeHlpdjFhcTAxYnUzY3FwZWpubDFsMHkifQ.qP8WwVUB9tBcGFbDz2ISWw&limit=1';

  request({ url: urlGeoCoding, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the location services', undefined);
    } else if (response.body.features.length === 0) {
      callback('Result not found. Try another search.', undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        lattitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
