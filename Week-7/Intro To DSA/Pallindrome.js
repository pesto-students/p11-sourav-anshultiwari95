function isPallindrome(n) {
    let k = n
    let reversed = 0;
    while (n !== 0) {
        reversed = (reversed * 10) + (n % 10);
        n = Math.floor(n / 10);
    }
    if (reversed == k) {
        console.log('Yes,' + k + ' is a Pallindrome');
    }
    else {
        console.log('No,' + k + ' is not a Pallindrome');
    }

}