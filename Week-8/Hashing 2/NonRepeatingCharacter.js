function NonRepeating(input) {
    const charFrequency = {};

    for (let char of input) {
        if (char in charFrequency) {
            charFrequency[char]++;
        } else {
            charFrequency[char] = 1;
        }
    }

    for (let char of input) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    return "No non-repeating characters found";
}


const userInput = prompt("Enter a string:").trim();
const result = NonRepeating(userInput);
console.log("Output:", result);

