class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Cannot divide by zero!";
        }
    }
}

class ScientificCalculator extends Calculator {
    square(num) {
        return num * num;
    }

    cube(num) {
        return num * num * num;
    }

    power(num, exponent) {
        return Math.pow(num, exponent);
    }
}

const scientificCalc = new ScientificCalculator();

const sum = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log("Sum:", sum);

const difference = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
console.log("Difference:", difference);

const multiplyByTwo = scientificCalc.multiply.bind(scientificCalc, 2);
console.log("Multiply by Two:", multiplyByTwo(5));

const powerOfThree = scientificCalc.power.bind(scientificCalc, 3);
console.log("Power of Three:", powerOfThree(2));
