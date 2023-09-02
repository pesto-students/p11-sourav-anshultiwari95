function deleteArray() {

    const inputString = prompt("Enter the array elements separated by spaces:");
    const arr = inputString.split(" ").map(Number);
    const filteredArr = arr.filter(num => num % 2 !== 0 && num % 3 !== 0);

    return filteredArr;
}