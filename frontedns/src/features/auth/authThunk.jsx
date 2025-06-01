import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUSerApi, registerUserApi } from "./authApi";


export const registerUser=createAsyncThunk('auth/login',registerUserApi)
export const loginUser=createAsyncThunk('auth/register',loginUSerApi)