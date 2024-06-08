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
}

class BankAccount {
    constructor(accountNumber, firstName, lastName) {
        this._accountNumber = accountNumber;
        this._firstName = firstName;
        this._lastName = lastName;
        this._accountHolder = firstName + " " + lastName;
        this._balance = 0;
        this._transactions = [];
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
        return this._transactions;
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
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            this._transactions.push(new Transaction("withdrawal", amount));
        } else {
            console.log("Withdrawal amount must be greater than 0 and less than or equal to the balance.");
        }
    }

    getTransactions() {
        return this._transactions;
    }
}


const account = new BankAccount(123456789, "Mercy", "Abraham");
console.log("Initial balance:", account.balance);
account.deposit(1000);
console.log("Balance after deposit:", account.balance);
account.withdraw(500);
console.log("Balance after withdrawal:", account.balance);
console.log("Transactions:", account.getTransactions());
