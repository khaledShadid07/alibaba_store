const userRouter = require('./routers/userRouters.js')
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB=require('./config/db.js')

dotenv.config();
connectDB();

const app = express();
app.use(express.json())
app.use(cors({
  origin: "*",
  credentials: true,
  methods: "*",
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use('/users',userRouter)

const PORT = process.env.PORT ||5000;

app.listen(PORT,()=>console.log(`🚀🚀server is running on port ${PORT} 🚀🚀`))