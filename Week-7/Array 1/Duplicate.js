function getArray() {
    const inputString = prompt("Enter the array elements separated by spaces:");
    const arr = inputString.split(" ").map(Number);

    return arr;
}

function findNonDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        if (counter <= 1) {
            return arr[i];
        }
    }
}

function main() {
    const arr = getArray();
    if (!Array.isArray(arr) || arr.length === 0) {
        console.log("Invalid input or empty array!");
        return;
    }

    const nonDuplicateElement = findNonDuplicate(arr);
    console.log("The non-duplicate element is:", nonDuplicateElement);
}

main();