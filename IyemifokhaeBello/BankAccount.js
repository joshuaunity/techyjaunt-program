
class BankAccount {
    constructor(accountHolder, accountNumber) {
        this._accountHolder = accountHolder;
        this._accountNumber = accountNumber;
        this._balance = 0;
        this._transactions = [];
    }

    //GET ACCOUNTHOLDER OF THE ACCOUNT
    get accountHolder() {
        return this._accountHolder;
    }

    //GET ACCOUNTHOLDER OF THE ACCOUNT
    get accountNumber() {
        return this._accountNumber;
    }

    //SHOW ACCOUNT BALANCE IN THE ACCOUNT
    get balance() {
        return this._balance;
    }

    getTransactions(){
        return this._transactions;
    }

    deposit(amount) {
        // amount is added to the balcance
        this._balance += amount;
        const transaction = new Transactions("Deposit", amount);
        this._transactions.push(transaction);
        
    }

    withdraw(amount) {
        if (this._balance >= amount) {
             this._balance -= amount;
            const transaction = new Transactions("Withdraw", amount);
            this._transactions.push(transaction);
            return this._balance;
        } else {
            console.log("Insufficient balance");
            return false;
        }
    }


}

class Transactions {
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
}

const Account1 = new BankAccount("Iyemifokhae Bello", 123456789);


console.log(Account1.deposit(1000));
console.log(Account1.deposit(500));
console.log(Account1.withdraw(2000));
console.log(Account1.getTransactions());
console.log(`Accoubt balance: ${Account1.balance}`);


// console.log(Account1.accountHolder);
// console.log(Account1.accountNumber);




