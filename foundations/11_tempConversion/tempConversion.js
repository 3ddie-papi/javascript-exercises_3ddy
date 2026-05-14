const convertToCelsius = function(num) {
  let celsius = (num - 32) * (5/9);
  let roundedCelsius = celsius.toFixed(1);
  let answer = Number(roundedCelsius);
  return answer;
};

const convertToFahrenheit = function(num) {
   let fahrenheit = (num * (9/5)) + 32;
   let roundedFahrenheit = fahrenheit.toFixed(1);
   let answer = Number(roundedFahrenheit);
   return answer
};

console.log(convertToCelsius(-100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
