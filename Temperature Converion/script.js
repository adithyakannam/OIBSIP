// Get the form element and result element
const form = document.getElementById('temperature-form');
const resultDiv = document.getElementById('result');

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the temperature and unit type from the form
  const temperature = Number(document.getElementById('temperature').value);
  const unitType = document.getElementById('unit-type').value;

  // Convert the temperature to the other unit type
  let convertedTemperature;
  if (unitType === 'celsius') {
    convertedTemperature = (temperature * 1.8) + 32;
  } else if (unitType === 'fahrenheit') {
    convertedTemperature = (temperature - 32) / 1.8;
  }

  // Display the converted temperature
  resultDiv.textContent = `${convertedTemperature.toFixed(1)}° ${unitType === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
});
