window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   const errorMessage = document.getElementById("errorMessage");
   const weatherImage = document.getElementById("weatherImage");

   cInput.addEventListener("input", clearFInput);
   fInput.addEventListener("input", clearCInput);
   convertButton.addEventListener("click", convertTemperature);

   function convertCtoF(degreesCelsius) {
      return degreesCelsius * 9 / 5 + 32;
   }

   function convertFtoC(degreesFahrenheit) {
      return (degreesFahrenheit - 32) * 5 / 9;
   }

   function clearFInput() {
      fInput.value = "";
   }

   function clearCInput() {
      cInput.value = "";
   }

   function convertTemperature() {
      const cValue = parseFloat(cInput.value);
      const fValue = parseFloat(fInput.value);

      if (!isNaN(cValue)) {
         const fTemp = convertCtoF(cValue);
         fInput.value = fTemp.toFixed(2);
         updateWeatherImage(fTemp);
         errorMessage.innerHTML = "";
      } else if (!isNaN(fValue)) {
         const cTemp = convertFtoC(fValue);
         cInput.value = cTemp.toFixed(2);
         updateWeatherImage(fValue);
         errorMessage.innerHTML = "";
      } else {
         errorMessage.innerHTML = "Not a Number";
      }
   }

   function updateWeatherImage(fahrenheit) {
      if (fahrenheit < 32) {
         weatherImage.src = "cold.png";
      } else if (fahrenheit >= 32 && fahrenheit <= 50) {
         weatherImage.src = "cool.png";
      } else {
         weatherImage.src = "warm.png";
      }
   }
}
