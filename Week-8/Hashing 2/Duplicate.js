function checkForDuplicates(input) {
    const elements = input.split(' ').map(Number);
    const hashMap = {};

    for (const element of elements) {
        if (hashMap[element]) {
            console.log("There are duplicate elements in the array.");
            return;
        }
        hashMap[element] = true;
    }

    console.log("There are no duplicate elements in the array.");
}

const userInput = prompt("Enter a series of integers separated by spaces:");
checkForDuplicates(userInput);
