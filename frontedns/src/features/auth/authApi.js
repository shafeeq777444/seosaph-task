
import toast from "react-hot-toast"
import ENDPOINTS from "../../services/ENDPOINTS"
import axiosInstance from "../../services/axiosInstance"

export const registerUserApi=async(data,{rejectWithValue})=>{
    try{

        const response= await axiosInstance.post(ENDPOINTS.AUTH.REGISTER,data)
        return response.data
    }
    catch(error){
       return rejectWithValue(error.response.data)
    }
}

export const loginUSerApi=async(data,{rejectWithValue})=>{
    console.log(data,"sdad")
    try{

        const response=await axiosInstance.post(ENDPOINTS.AUTH.LOGIN,data)
        localStorage.setItem('accessToken',response.data.accestoken)
        localStorage.setItem('refreshToken',response.data.refreshToken)
        return response.data
    }
    catch(error){
       return rejectWithValue(error.response.data)

    }
}