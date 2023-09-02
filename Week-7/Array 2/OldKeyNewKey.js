function OldKey(arr, oldk, newk) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == oldk) {
            arr[i] = newk;
        }
    }
    return arr;
}