class Transaction{

    constructor(type,amount){
        this.validateTransactionType(type);
        this.type = type;
        this.validateTransactionAmount(amount)
        this.amount = amount;
        this.timestamp = new Date;
    }

    get getTransactionType(){
        return this.type;
    }

    set setTransactionType(type){
        this.validateTransactionType(type);
        this.type = type;
    }

    get getTransactionAmount(){
        return this.amount;
    }
    set setTransactionAmount(amount){
        this.validateTransactionAmount(amount);
        this.amount = amount;
    }

    get getTransactionTime(){
        return this.timestamp 
    }

    set setTransactionTime(date){
        if(isNaN(new Date(date))){
            throw new Error("Invalid date format...Valid date format is 'YYYY/MM/DD 'or 'MM/DD/YYYY'")
        }
    } 

    validateTransactionType(type) {
        if ((typeof type !== "string" ) && (type !== "Credit" || type !=="Debit")) {
            throw new Error("Invalid transaction type..Transaction type should be 'Credit' or 'Debit'");
        }
    }
    validateTransactionAmount(amount) {
        if (typeof amount !== "number" && amount < 0) {
            throw new Error("Invalid transaction amount");
        }
    }
}
export default Transaction;