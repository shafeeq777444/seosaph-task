import { loginService, registerService } from "../services/userService.js"
import customError from "../utils/errorHandlers/CustomErrorClass.js"
import jwt from 'jsonwebtoken'
export const registerController=async(req,res)=>{
    console.log(req.body)
  const result=  await registerService(req.body)
    res.status(200).json(result)
}

export const loginController=async(req,res)=>{
    console.log(req.body,"hello")
   const {accestoken,refreshToken,name,id}= await loginService(req.body)
   res.cookie("accessToken",`Bearer ${accestoken}`,{
    sameSite:'none',
    httpOnly:true,
    maxAge:3*60*1000
   })
   res.cookie("refreshToken",refreshToken,{
    sameSite:'none',
    httpOnly:true,
    maxAge:30*60*1000
   })
console.log("wordeld")
   res.status(200).json({accestoken,refreshToken,name,id})

}

export const refreshTokenControl=(req,res)=>{
    const {refreshToken}=req.body
    console.log(refreshToken,'refresh token')
    if(!refreshToken){
        throw new customError("Unautherized",401)
    }
    try{
     const decoded=   jwt.verify(refreshToken,process.env.JWTSECRET)
    //  console.log(decoded,"decode")
   const newToken= jwt.sign({name:decoded.name,id:decoded.id},process.env.JWTSECRET,{expiresIn:'3m'})
    // res.cookie('accessToken',newToken,{
    //     sameSite:'none',
    //     httpOnly:true,
    //     maxAge:3*60*1000
    // })

    res.status(200).json({token:newToken})
    }
    catch(er){
        throw new customError("unautheruzed", 404)
    }


}