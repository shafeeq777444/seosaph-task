import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice.jsx'

const store=configureStore({
    reducer:{
        user:authReducer

    }
})

export default store