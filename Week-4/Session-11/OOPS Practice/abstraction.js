class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    withdraw(amount) {
        if (this.getBalance() - amount < 0) {
            console.log("Withdrawal failed. Insufficient balance.");
            return;
        }
        super.withdraw(amount);
    }
}


const checking = new CheckingAccount("A576", 1000, "Anshul Tiwari");
const savings = new SavingsAccount("S456", 500, "Ateet Tiwari");

checking.deposit(200);
checking.withdraw(100);
console.log("Checking Account Balance:", checking.getBalance());

savings.deposit(100);
savings.withdraw(700);
console.log("Savings Account Balance:", savings.getBalance()); 