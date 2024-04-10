import Transaction from "./transaction.js";

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
    // set setTransactions(transactions){
    //     if(!Array.isArray(transactions)){
    //         throw new Error("transaction passed is not an array")
    //     }
    //     transactions.forEach(transaction => {
    //         if(transaction.hasPoperty !== "type" && transaction.hasPoperty !== "amount" && transaction.hasPoperty !== "timestamp"){
    //             throw new Error("Array passed in not of transaction type")
    //         }        
    //     });
    //     transactions.forEach(transaction => {
    //         this.transactions.push(transaction);
    //     });
        
    //     console.log(`Added ${transactions.length} transactions`);
    // }

    getTransactions () {
        return this.transactions;

    };
        
    deposit(amount){
        if(typeof amount === "number" && amount > 0){
            this.balance += amount;
            const transaction = new Transaction("Credit",amount);
            this.transactions.push(transaction);  
            console.log(`Successfully deposited ${amount}...New account balance is ${this.balance}`)
        }else{
            console.log("Deposit Failed...Please deposit an amount greater than zero");
        }
        
    }
    withdraw (amount){
        if(typeof amount === "number" && amount > 0 && this.balance > amount){
            this.balance -= amount;
            const transaction = new Transaction("Debit",amount);
            this.transactions.push(transaction);
            console.log(`Successfully withdrawn ${amount}...New account balance is ${this.balance}`)
        }else{
            console.log("Withdrawal Failed...Ensure you are entering a valid amount and your balance is greater than 0r equal to the withdrawal amount")
        }
    }
}
const bankAccount = new BankAccount(1234567,"Ademiju Taiwo");
console.log(bankAccount);
bankAccount.setAccountNumber = 12322;
bankAccount.setAcountHolder= "John Doe";
bankAccount.deposit(40000);
console.log(bankAccount);
bankAccount.withdraw(4000);
console.log(bankAccount);
