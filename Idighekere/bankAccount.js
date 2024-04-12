// Create a BankAccount Class and a Transaction Class.Each of these classes will contain the below attributes.

//     BankAccount
// accountNumber | number | private attribute
// accountHolder | string | private attribute
// balance | number | private attribute
// transactions | array | private attribute
// deposit function
//     withdraw function
//     getTransactions function

//     All the above attributes are private and should only be accessible through the use of a getter or setter.

//         Transaction
// type | string | private attribute
// amount | number | private attribute
// timestamp | date | private attribute

// All the above attributes are private and should only be accessible through the use of a getter or setter.
// const person1 = new BankAccount(2345624312, "Idighs Udo", `$2000`)
// const person2 = new BankAccount(7041300445, "Idighekere Udo", `$20000`)
// console.log(person1.accountDetails())
// console.log(person2.accountDetails())
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this._accountNumber = accountNumber
        this._accountHolder = accountHolder
        this._balance = balance
        this._transactions = []
    }

    get accountNumber() {
        return this._accountNumber
    }
    set accountNumber(num) {
        return this._accountNumber = num
    }

    get accountHolder() {
        return this._accountHolder
    }
    set accountHolder(name) {
        return this._accountHolder = name
    }
    get balance() {
        return this._balance
    }
    set balance(num) {
        return this._balance = num
    }
    deposit(amount) {
        // const balance = this._balance

        if (typeof amount !== "number") {
            return `Amount must be a number`
        } else {
            this._balance += amount
            const depositTransaction = new Transaction("deposit", amount)
            this._transactions.push(depositTransaction)

        }

    }
    withdraw(amount) {
        try {

            if (this._balance < amount) {
                throw new Error(`Insufficient Balance`)
            } else {
                this._balance -= amount;
                const withdrawalTransaction = new Transaction("withdraw", amount)
                this._transactions.push(withdrawalTransaction)
            }
        } catch (error) {
            console.error(error.message)
        }

    }
    getTransactions() {
        return this._transactions
    }
}

class Transaction {
    constructor(type, amount) {
        this._type = type
        this._amount = amount
        this._timestamp = new Date()
    }
}
const acc = new BankAccount(1234567890, "Idighekere Udo", 50000)
// const acc1 = new BankAccount(1234567890, "Idighekere Udo", 2000)
console.log(`Initial Balance: NGN${acc.balance}`)
// console.log(`Initial Balance: NGN${acc1.balance}`)
acc.deposit(12500)
console.log(`Balance after Deposit: NGN${acc.balance}`)
acc.withdraw(7000)
console.log(`Balance after Withdraw: NGN${acc.balance}`)
acc.withdraw(100000)
console.log(`Balance after Withdraw: NGN${acc.balance}`)
acc.deposit(100000)
console.log(`Balance after Deposit: NGN${acc.balance}`)

console.log(acc.getTransactions())