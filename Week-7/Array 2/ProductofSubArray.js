function findMaxProductSubarray(size, elements) {
    if (size <= 0 || !Array.isArray(elements) || elements.length !== size) {
        console.log("Invalid input!");
        return;
    }

    let maxProduct = elements[0];
    let minProduct = elements[0];
    let result = elements[0];

    for (let i = 1; i < size; i++) {
        if (elements[i] < 0) {
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(elements[i], elements[i] * maxProduct);
        minProduct = Math.min(elements[i], elements[i] * minProduct);

        result = Math.max(result, maxProduct);
    }

    return result;
}

