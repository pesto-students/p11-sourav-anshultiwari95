function ArraySum(arr, n = 0) {

    if (n >= arr.length) {
        return 0;
    }
    else {

        const currentElement = arr[n];
        const remainingSum = ArraySum(arr, n + 1);
        return currentElement + remainingSum;
    }
}