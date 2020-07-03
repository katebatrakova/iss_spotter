const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const fetchISSFlyOverCoords = { latitude: '45.50000', longitude: '-73.58330' };

//index.js is needed to invoke our main fetch functions.


//callback function begincs (error, ip) => and is passed as an argument into fetchMyIP
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('24.48.7.224', (error, coordinates) => {
//   if (error) {
//     console.log(error, "It didn't work");
//     return;
//   }
//   console.log('It worked! Returned Coordinatess:', coordinates)
// })


fetchISSFlyOverTimes(fetchISSFlyOverCoords, (error, responseTimes) => {
  if (error) {
    console.log(error);
  }

  console.log(responseTimes);
});

