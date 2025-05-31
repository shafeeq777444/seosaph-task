import jwt from 'jsonwebtoken'

export const generateAccessToken=(user)=>{
  const accessToken=  jwt.sign({name:user.name,id:user._id},process.env.JWTSECRET,{expiresIn:"3m"})
  return accessToken
}

export const generateRefreshToken=(user)=>{
   const refreshToken= jwt.sign({name:user.name,id:user._id},process.env.JWTSECRET,{expiresIn:"30m"})
   return refreshToken
}