const convertToCelsius = function(fahTemp) {
  // Celsius (°C) = (degrees Fahrenheit (°F) - 32) * 5/9.
  let roundedCelsius = ((fahTemp - 32)*(5/9)).toFixed(1);
  // Convert the result back to a number
  return parseFloat(roundedCelsius);
};

const convertToFahrenheit = function(celsTemp) {
  // Fahrenheit (°F) = (degrees Celsius (°C) * 9/5) + 32.
  let roundedFahrenheit = ((celsTemp * (9/5)) + 32).toFixed(1);
  return parseFloat(roundedFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
