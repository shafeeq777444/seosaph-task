import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './authThunk'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
   const {name:userName,error}= useSelector((state)=>state.user)

    const handleSubmit=(e)=>{
       e.preventDefault()
        dispatch(loginUser({name,password}))
        
    }
    useEffect(()=>{
      if(userName){
        toast.success(`${userName}log in success` )
        navigate('/home')
      }
      if(error){
        toast.error(error)

      }
    },[userName,error,navigate])
  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <label>name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)}/>
          <label>password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button>submit</button>
      </form>
    </div>
  )
}

export default Register
