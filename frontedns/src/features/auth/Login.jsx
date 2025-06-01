import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../services/axiosInstance'

const Register = () => {
    const [email,setemail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
       e.preventDefault()
       try{
         await axiosInstance.post("/user/login",{email,password});
       toast.success('user Login success')
        navigate('/')
       }catch(er){
         toast.error(er.response.data.message)
       }
      
        
    }


  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <label>email</label>
          <input value={email} onChange={(e)=>setemail(e.target.value)}/>
          <label>password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button>submit</button>
      </form>
    </div>
  )
}

export default Register
