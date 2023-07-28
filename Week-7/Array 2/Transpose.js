function takeMatrixInput() {
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

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposedMatrix = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposedMatrix.push(newRow);
    }

    return transposedMatrix;
}

const matrix = takeMatrixInput();
console.log("Input matrix:", matrix);

const transposedMatrix = transposeMatrix(matrix);
console.log("Transposed matrix:", transposedMatrix);
