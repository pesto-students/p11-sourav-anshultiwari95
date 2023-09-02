function calculateHCF(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calculateLCM(a, b) {
    const hcf = calculateHCF(a, b);
    return (a * b) / hcf;
}


function calculateProduct(num1, num2) {

    const lcm = calculateLCM(num1, num2);
    const hcf = calculateHCF(num1, num2);
    const product = lcm * hcf;
    console.log(`The LCM of ${num1} and ${num2} is: ${lcm}`);
    console.log(`The HCF of ${num1} and ${num2} is: ${hcf}`);
    console.log(`The product of LCM and HCF is: ${product}`);
}
