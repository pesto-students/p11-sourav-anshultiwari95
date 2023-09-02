function Subsequence(arr) {
    const numsSet = new Set(arr);
    let maxLength = 0;

    for (const num of arr) {
        if (!numsSet.has(num - 1)) {
            let length = 1;
            let currentNum = num + 1;

            while (numsSet.has(currentNum)) {
                length++;
                currentNum++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}
const inputStr = prompt("Enter array elements separated by spaces: ");
const inputArray = inputStr.split(' ').map(Number);
const result = Subsequence(inputArray);
console.log("Length of the longest consecutive subsequence:", result);
