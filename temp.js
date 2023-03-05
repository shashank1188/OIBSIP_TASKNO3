const tempInput = document.getElementById("temp-input");
const tempSelect = document.getElementById("temp-select");
const result = document.getElementById("result");

function convertTemperature() {
  const temperature = parseFloat(tempInput.value);
  if (!isNaN(temperature)) {
    switch (tempSelect.value) {
      case "celsius":
        result.innerText = `${temperature}°C = ${temperature * 1.8 + 32}°F = ${temperature + 273.15}K`;
        break;
      case "fahrenheit":
        result.innerText = `${temperature}°F = ${(temperature - 32) / 1.8}°C = ${(temperature - 32) / 1.8 + 273.15}K`;
        break;
      case "kelvin":
        result.innerText = `${temperature}K = ${temperature - 273.15}°C = ${(temperature - 273.15) * 1.8 + 32}°F`;
        break;
      default:
        break;
    }
  } else {
    result.innerText = "Please enter a valid temperature";
  }
}

tempInput.addEventListener("input", convertTemperature);
tempSelect.addEventListener