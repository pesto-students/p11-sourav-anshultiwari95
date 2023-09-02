function findLongestSubarray(arr) {
    arr = arr.split(' ').map(Number);
    let diffMap = new Map();
    let maxLen = 0;
    let diff = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            diff--;
        } else {
            diff++;
        }

        if (diff === 0) {
            maxLen = i + 1;
        } else if (diffMap.has(diff)) {
            maxLen = Math.max(maxLen, i - diffMap.get(diff));
        } else {
            diffMap.set(diff, i);
        }
    }

    return maxLen;
}

const input = prompt("Enter the array elements separated by spaces:");
const result = findLongestSubarray(input);
console.log(result);
