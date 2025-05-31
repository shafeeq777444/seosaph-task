import jwt from 'jsonwebtoken'
import customError from '../utils/errorHandlers/CustomErrorClass.js'
const jwtVerifyCookies=(req,res,next)=>{
 const accesToken=  req.headers.authorization
 console.log(accesToken ,'asds')
 if(!accesToken){
   throw new customError("unautherised , No access token Provided",401)
}
if(!accesToken.startsWith('Bearer ')){
   throw new customError('Unautherized ',401)
}
const token=accesToken.split(" ")[1]
 console.log(token,"sda")
 try{

    const decoded=jwt.verify(token,process.env.JWTSECRET)
    req.user=decoded
    next()
 }
 catch(err){
   throw new customError('Unautherized ',403)
 }



}

export default jwtVerifyCookies