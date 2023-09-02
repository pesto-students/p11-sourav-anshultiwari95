function PairsSum(arr, S) {
    const pairs = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === S) {
                const pair = [arr[i], arr[j]];
                if (!pairs.some(([a, b]) => (a === pair[0] && b === pair[1]) || (a === pair[1] && b === pair[0]))) {
                    pairs.push(pair);
                }
            }
        }
    }

    return pairs;
}