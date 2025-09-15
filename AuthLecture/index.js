import express from "express"
import connectDB from './utils/db.js';
import userRouter from "./routes/user.routes.js"

const app = express();

const PORT = process.env.PORT || 4000
app.use(express.json()) // body parser

app.use(express.urlencoded({ extended: true })) // url encoding but extends kyu ki ham chahte hai new method bana hai urlEncode krne ka usse kre

// db connected
connectDB()



app.use('/user',userRouter)




// Start the server
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});
