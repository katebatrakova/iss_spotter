/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

//asynchronously return our IP Address using an API
// const fetchMyIP = function (callback) {
//   // use request to fetch IP address from JSON API
//   request('https://api.ipify.org?format=json', 'utf8', (error, response, body) => {
//     // error if invalid domain, user is offline, etc.
//     if (error) {
//       return callback(error, null);
//     }
//     // if non-200 status, assume server error
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const JSONformatIP = JSON.parse(body).ip;

//     if (!error) {
//       callback(null, JSONformatIP);
//     }
//   });
// };

// const fetchCoordsByIP = function (ip, callback) {
//   request(`https://ipvigilante.com/${ip}`, 'utf8', (error, response, body) => {
//     //  // error can be set if invalid domain, user is offline, etc.
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     // if non-200 status, assume server error
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const { latitude, longitude } = JSON.parse(body).data;
//     // console.log({ latitude }, { longitude })
//     callback(null, { latitude, longitude })
//   });
// };



const fetchISSFlyOverTimes = function(coordinates, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coordinates.latitude}&lon=${coordinates.longitude}`, 'utf8', (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    //if no errors =>
    const JSONbodyResponse = JSON.parse(body).response;
    callback(null, JSONbodyResponse);
  });
};



// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };