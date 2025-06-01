import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './authThunk'
import toast from 'react-hot-toast';

const Login = () => {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const userName=useSelector((state)=>state.user?.name)

    const handleSubmit=async(e)=>{
      e.preventDefault()
     await dispatch(registerUser({name,password}))
     
    }
    useEffect(()=>{
      if(userName){
        toast.success(`${userName} is logged in successfully`)
      }

    },[userName])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
                  <input value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                  <label>password</label>
                  <input value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                  <button>Submit</button>
        </form>
    </div>
  )
}

export default Login
