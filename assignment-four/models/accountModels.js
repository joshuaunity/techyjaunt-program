import mongoose from "mongoose";



const accountSchema = new mongoose.Schema({
    accountNumber: { 
        type: Number, 
        required: true
     },
    firstName: { 
        type: String,
        required: true 
        },
    lastName: { 
        type: String, 
        required: true 
    },
    balance: { 
        type: Number, 
        default: 0 
    },
    dailyWithdrawalLimit: { 
        type: Number, 
        default: 1000 
    },
    transactions: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Transaction' 
    }]
});

const Account = mongoose.model('Account', accountSchema);

export default Account




