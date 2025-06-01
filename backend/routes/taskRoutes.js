import express from "express"
import { addController, getController } from "../controllers/taskController.js"
import jwtVerifyCookies from "../middlewares/VerifyCoookies.js"
const route=express.Router()

route.post('/add',jwtVerifyCookies,addController)
route.get('/get',jwtVerifyCookies,getController)

export default route