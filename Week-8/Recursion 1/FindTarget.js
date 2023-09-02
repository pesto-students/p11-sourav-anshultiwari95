function FindTarget(arr, tar, n = 0) {
    if (n >= arr.length) {
        return "-1";
    }
    else
        if (arr[n] == tar) {
            return n;
        }
        else {
            return FindTarget(arr, tar, n + 1);
        }
}