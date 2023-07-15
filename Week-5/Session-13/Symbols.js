let counter = 0;

function generateTransactionId() {

    counter++;


    const transactionIdString = `TRANSACTION_ID_${counter}`;


    const transactionId = Symbol(transactionIdString);

    return transactionId;
}


const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3); 
