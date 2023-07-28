function getInputArray() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        console.log("Invalid input!");
        return;
    }

    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const rowElements = prompt(`Enter ${cols} elements for row ${i + 1} separated by spaces:`);
        const rowArray = rowElements.split(" ").map(Number);

        if (rowArray.length !== cols) {
            console.log("Invalid number of elements for row", i + 1);
            return;
        }

        matrix.push(rowArray);
    }

    return matrix;
}

function calculateSumOfArrays(array1, array2) {
    const rows1 = array1.length;
    const cols1 = array1[0].length;
    const rows2 = array2.length;
    const cols2 = array2[0].length;

    if (rows1 !== rows2 || cols1 !== cols2) {
        throw new Error("Arrays must have the same dimensions.");
    }

    const sumArray = [];

    for (let i = 0; i < rows1; i++) {
        const newRow = [];
        for (let j = 0; j < cols1; j++) {
            newRow.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(newRow);
    }

    return sumArray;
}

const array1 = getInputArray();
console.log("Array 1:", array1);

const array2 = getInputArray();
console.log("Array 2:", array2);

try {
    const sumArray = calculateSumOfArrays(array1, array2);
    console.log("Sum of arrays:", sumArray);
} catch (error) {
    console.error(error.message);
}
