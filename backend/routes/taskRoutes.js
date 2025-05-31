import express from "express"
import { addController, getController } from "../controllers/taskController.js"
import { refreshTokenControl } from "../controllers/userController.js"
const route=express.Router()

route.post('/add',refreshTokenControl,addController)
route.get('/get',refreshTokenControl,getController)

export default route