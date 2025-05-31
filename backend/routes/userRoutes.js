import express from 'express'
import { loginController, refreshTokenControl, registerController } from '../controllers/userController.js'
import jwtVerifyCookies from '../middlewares/VerifyCoookies.js'
const route=express.Router()

route.post('/register',registerController)
route.post('/login',loginController)
route.post('/refreshToken',refreshTokenControl)
route.get('/check',jwtVerifyCookies,(req,res)=>{
    console.log("worked")
    res.json({message:req.user})
})

export default route