function Palindrom(input) {
    let start = 0;
    let maxLen = 0;

    function expandFromCenter(left, right) {
        while (left >= 0 && right < input.length && input[left] === input[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < input.length; i++) {
        const len1 = expandFromCenter(i, i);
        const len2 = expandFromCenter(i, i + 1);
        const length = Math.max(len1, len2);

        if (length > maxLength) {
            maxLength = length;
            start = i - Math.floor((length - 1) / 2);
        }
    }

    return input.substring(start, start + maxLength);
}

const inputStr = prompt("Enter a string: ");
const result = Palindrom(inputStr);
console.log("Longest palindromic substring:", result);
