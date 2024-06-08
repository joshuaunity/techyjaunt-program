import express from "express";
import bodyParser from "body-parser";
import { dbConnection } from "./database/dbConnection.js";
import router from "./routes/routes.js";


const app = express();
dbConnection();


const port = 2000;


app.use(bodyParser.json());
app.use('/api/account', router)

app.listen (port, () => {
    console.log(`Server is running on port ${port}`)
})