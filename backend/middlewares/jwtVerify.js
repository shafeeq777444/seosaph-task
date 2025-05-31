import jwt from 'jsonwebtoken'
import customError from '../utils/errorHandlers/CustomErrorClass.js'
const jwtVerify=(req,res,next)=>{
    const authHeader=req.headers.authorization
    if(!authHeader || authHeader.startsWith('Bearer ')){
        throw new customError("Unautherized : no token Provided",404)
    }
    const token=authHeader.split(" ")[1]
    try{

        const decoded= jwt.verify(token,process.env.JWTSECRET)
        req.user=decoded
        next()
    }
    catch(er){
        throw new customError(er.message,404)
    }

    
}

export default jwtVerify