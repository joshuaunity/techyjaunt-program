class Transaction {
    constructor(type, amount) {
        this._type = type;
        this._amount = amount;
        this._timestamp = new Date();
    }

    get type() {
        return this._type;
    }

    get amount() {
        return this._amount;
    }

    get timestamp() {
        return this._timestamp;
    }

    toJSON() {
        return {
            type: this._type,
            amount: this._amount,
            timestamp: this._timestamp
        };
    }
}

class BankAccount {
    constructor(accountNumber, firstName, lastName, dailyWithdrawalLimit) {
        this._accountNumber = accountNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._accountHolder = firstName + " " + lastName;
        this._balance = 0;
        this._transactions = [];
        this._dailyWithdrawalLimit = dailyWithdrawalLimit;
        this._withdrawalAmountToday = 0;
    }

    get accountNumber() {
        return this._accountNumber;
    }

    get accountHolder() {
        return this._accountHolder;
    }

    get balance() {
        return this._balance;
    }

    get transactions() {
        return this._transactions.map(transaction => transaction.toJSON());
    }

    get dailyWithdrawalLimit() {
        return this._dailyWithdrawalLimit;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            this._transactions.push(new Transaction("deposit", amount));
        } else {
            console.log("Deposit amount must be greater than 0.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && (this._withdrawalAmountToday + amount) <= this._dailyWithdrawalLimit && amount <= this._balance) {
            this._balance -= amount;
            this._transactions.push(new Transaction("withdrawal", amount));
            this._withdrawalAmountToday += amount;
        } else {
            console.log("Withdrawal amount must be greater than 0, within daily withdrawal limit, and less than or equal to the balance.");
        }
    }

    transfer(amount, targetAccount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            targetAccount.deposit(amount);
            this._transactions.push(new Transaction("transfer", amount));
        } else {
            console.log("Transfer amount must be greater than 0 and less than or equal to the balance.");
        }
    }
}


const account1 = new BankAccount(123456789, "Mercy", "Abraham", 1000);
const account2 = new BankAccount(987654321, "Chukwudi", "Leonard", 1500);

console.log("Initial balance of account1:", account1.balance);
account1.deposit(1000);
console.log("Balance of account1 after deposit:", account1.balance);
account1.withdraw(500);
console.log("Balance of account1 after withdrawal:", account1.balance);

console.log("Initial balance of account2:", account2.balance);
account1.transfer(200, account2);
console.log("Balance of account1 after transfer:", account1.balance);
console.log("Balance of account2 after transfer:", account2.balance);

console.log("Transactions of account1:", account1.transactions);
console.log("Transactions of account2:", account2.transactions);
