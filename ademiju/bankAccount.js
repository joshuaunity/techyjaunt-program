class BankAccount{
//     accountNumber | number | private attribute
// accountHolder | string | private attribute
// balance | number | private attribute
// transactions | array | private attribute
// deposit function
// withdraw function
// getTransactions function
constructor(accountNumber,accountHolder,balance,transactions){
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];

}

 
    get accountNumber(){
        return this.accountNumber
    }
    set accountNumber(accountNumber){
        if(typeof accountNumber !==  "number"){
            throw new Error("Account number entered not a number");
        }
        this.accountNumber = accountNumber;
    }
    
    get accountHolder(){
        return this.accountHolder
    }
    set accountHolder(accountHolder){
        if(typeof accountNumber !==  "string"){
            throw new Error("Account Holder entered not a String");
        }
        this.accountHolder = accountHolder;
    }
    
    get balance(){
            return this.balance
    }

    getTransactions () {
        return this.transactions;

    };
        
    deposit(amount){
        if(typeof amount === "number" && amount > 0){
            this.balance += amount;
            console.log(`Successfully deposited ${amount}...New account balance is ${this.balance}`)

        }
        
    }
    withdraw (amount){
        if(typeof amount === "number" && amount > 0 && this.balance > amount){
            this.balance -= amount;
            console.log(`Successfully withdrawn ${amount}...New account balance is ${this.balance}`)
        }
    }
}