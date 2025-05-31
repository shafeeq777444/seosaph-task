import express from 'express'
import userRoutes from './userRoutes.js'
import taskRoutes from './taskRoutes.js'
const route=express.Router()


route.use('/user',userRoutes)
route.use('/task',taskRoutes)


export default route