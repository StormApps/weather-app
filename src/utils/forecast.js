const request = require('request');

const foreCast = (longitude, lattitude, callback) => {
  const urlDarkSky =
    'https://api.darksky.net/forecast/a39bec0a0efb1baa6810e20dbe1d6ae9/' +
    lattitude +
    ',' +
    longitude +
    '?units=si';
  request({ url: urlDarkSky, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the DarkSky server :(', undefined);
    } else if (response.body.error) {
      callback('Result not Found!!!', undefined);
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        probability: response.body.currently.precipProbability
      });
    }
  });
};

module.exports = foreCast;
