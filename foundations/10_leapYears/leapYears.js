const leapYears = function(year) {
  for (let i = year; i < 2025; i++) {
    if (i % 4 == 0 && (i % 100 == 0 && i % 400 == 0)) {
    console.log (`${year} is leap year!`);
  } else if (i % 4 == 0 && i % 100 != 0 ) {
    console.log(`${year} is leap year!`) ;
  } else {
    // return false;
  }
  }
  
  
};
leapYears(2001);


// Do not edit below this line
module.exports = leapYears;
