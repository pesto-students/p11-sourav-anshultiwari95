async function getExchangeRate(currencyCode) {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates.');
        }

        const data = await response.json();
        const rate = data.rates[currencyCode];

        if (!rate) {
            return null;
        }

        return Number(rate.toFixed(4));
    } catch (error) {
        throw new Error(`Error: ${error.message}`);
    }
}

getExchangeRate('USD')
    .then((rate) => {
        console.log(rate);
    })
    .catch((error) => {
        console.error(error);
    });

