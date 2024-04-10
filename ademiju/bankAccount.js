import Transaction from "./transaction";

class BankAccount{

    constructor(accountNumber,accountHolder,balance,transactions){
        if(typeof accountNumber !==  "number"){
            throw new Error("Account number entered not a Number");
        }
        this.accountNumber = accountNumber;
        if(typeof accountHolder !==  "string"){
            throw new Error("Account Holder entered not a String");
        }
        this.accountHolder = accountHolder;
        this.balance = 0;
        this.transactions = [];

    }

 
    get getAccountNumber(){
        return this.accountNumber
    }
    set setAccountNumber(accountNumber){
        if(typeof accountNumber !==  "number"){
            throw new Error("Account number entered not a number");
        }
        this.accountNumber = accountNumber
    }
    
    get getAccountHolder(){
        return this.accountHolder
    }
    set setAcountHolder(accountHolder){
        if(typeof accountHolder!==  "string"){
            throw new Error("Account Holder entered not a String");
        }
        this.accountHolder = accountHolder;
    }
    
    get getBalance(){
            return this.balance
    }
    set setTransactions(transactions){
        if(!Array.isArray(transactions)){
            throw new Error("transaction passed is not an array")
        }
        transactions.forEach(transaction => {
            if(!transaction.hasPoperty("type") && !transaction.hasPoperty("amount") && !transaction.hasPoperty("timestamp")){
                throw new Error("Array passed in not of transaction type")
            }        
        });
        transactions.forEach(transaction => {
            this.transactions.push(transaction);
        });
        
        console.log(`Added ${transactions.length()} transactions`);
    }

    getTransactions () {
        return this.transactions;

    };
        
    deposit(amount){
        if(typeof amount === "number" && amount > 0){
            this.balance += amount;
            console.log(`Successfully deposited ${amount}...New account balance is ${this.balance}`)
            const transaction = new Transaction("Savings",amount);
            this.transactions.push(transaction);           

        }
        
    }
    withdraw (amount){
        if(typeof amount === "number" && amount > 0 && this.balance > amount){
            this.balance -= amount;
            console.log(`Successfully withdrawn ${amount}...New account balance is ${this.balance}`)
        }
    }
}
const bankAccount = new BankAccount(1234567,"Ademiju Taiwo");
console.log(bankAccount);
bankAccount.setAccountNumber = 12322;
bankAccount.setAcountHolder= "John Doe";
bankAccount.deposit(20000);
bankAccount.a
console.log(bankAccount.getBalance)
console.log(bankAccount);
console.log



// const bankAccount2 = new BankAccount("1234567","John Doe");
// console.log(bankAccount2);
