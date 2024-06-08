import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

export const dbConnection = () =>{
    mongoose.connect('mongodb://localhost:27017/BANK_APP')
        
       .then(() => console.log('Connected to the BANK_APP Database'))
        .catch((err) => console.log(`Some Error Occured. ${err.message}`))
    }
       
