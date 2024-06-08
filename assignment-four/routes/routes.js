import express from "express";
import Account from "../models/accountModels";


const router = express.Router();

router.post ('/createaccount', createAccount);
router.post ('/fetchaccounts', fetchAccount);

 export default router;


