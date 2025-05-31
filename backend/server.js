import express from 'express'
import { config } from 'dotenv'
import AllRoutes from './routes/index.js'
import errorHandler from './utils/errorHandlers/CustomErrorHandlingMiddleWare.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectPostgresDB from './config/pg.js'
config()
const app=express()
const port=process.env.PORT

// config

connectPostgresDB()
// middlewares If the middleware is already a function, you just write its name (no ())

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(express.json()) 
app.use(cookieParser())
// app.use(jwtVerifyCookies)

// Routes
app.use('/api',AllRoutes)

// error Hanlder
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`port ${port} is working`)
})
