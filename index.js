// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// const fetchISSFlyOverCoords = { latitude: '45.50000', longitude: '-73.58330' };


//callback function begins (error, ip) => and is passed as an argument into fetchMyIP
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


// fetchISSFlyOverTimes(fetchISSFlyOverCoords, (error, responseTimes) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(responseTimes);
// });




const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // if sucess - print out the passtimes
  printPassTimes(passTimes);
});