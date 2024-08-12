import express from 'express';
import mongoose from 'mongoose';
import dotenv from'dotenv';
dotenv.config();
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import path from 'path';
import cors from 'cors'



mongoose.connect(process.env.MONGO)
.then(()=>console.log("connected to db"))
.catch((error)=>console.log({error:error}))


const _dirname=path.resolve();


const app=express();
app.use(cors());


app.use(express.json());

app.use(cookieParser());

// app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


// app.get('/', (req, res) => {
//     return res.json("helllllo server"); 
// });

app.listen(8000, () => {
    console.log('server running on port 8000');
});
