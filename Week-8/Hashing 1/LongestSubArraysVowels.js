function longest(input) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let vowel = 0;
    let conso = 0;
    let maxLen = 0;
    const diffMap = { 0: -1 };

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (vowels.has(char)) {
            vowel++;
        } else {
            conso++;
        }

        const diff = vowel - conso;

        if (diff in diffMap) {
            maxLen = Math.max(maxLen, i - diffMap[diff]);
        } else {
            diffMap[diff] = i;
        }
    }

    return maxLen;
}

const inputStr = prompt("Enter a string: ");
const result = longest(inputStr);
console.log("Length of the longest subarray with equal vowels and consonants:", result);
