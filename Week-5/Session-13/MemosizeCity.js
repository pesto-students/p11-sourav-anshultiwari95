function getTemperatureForCity() {
    const temperatureData = {
        'New York': 20,
        'London': 18,
        'Paris': 22,
        'Tokyo': 25,
        'Sydney': 28,
    };

    const cache = {};

    return function (city) {
        if (cache[city]) {

            return cache[city];
        }
        else {

            const temperature = temperatureData[city];
            cache[city] = temperature;
            return temperature;
        }
    };
}


const getTemperature = getTemperatureForCity();

const temperature1 = getTemperature('New York');
console.log(temperature1);

const temperature2 = getTemperature('New York');
console.log(temperature2);

const temperature3 = getTemperature('London');
console.log(temperature3);
const temperature4 = getTemperature('London');
console.log(temperature4);