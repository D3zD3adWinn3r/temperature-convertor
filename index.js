function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);
    if (celsius < 0) {
        return "very cold";
    } else if (celsius < 20) {
        return "cold";
    } else if (celsius < 30) {
        return "warm";
    } else if (celsius < 40) {
        return "hot";
    } else if (celsius >= 40) {
        return "very hot";
    }

}


const userInput = prompt("Enter the temperature in Fahrenheit: ");
alert(convertAndDescribe(userInput));

function convertAndDescribe(userInput) {
    const fahrenheit = parseFloat(userInput);
    const celsius = convertToCelsius(fahrenheit);
    const description = describeTemperature(fahrenheit);
    return `The temperature is ${celsius.toFixed(2)}°C, which is considered ${description}.`;
}