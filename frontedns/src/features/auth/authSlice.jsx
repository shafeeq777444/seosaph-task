import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunk";

const initialState = {
    loading: true,
    error: "",
    name: "",
    id: "",
    count:1,
    token:localStorage.getItem('accessToken'),
    
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCount:(state,action)=>{state.count=action.payload}

    },
    extraReducers: (builder) => {
        builder

        // regiister
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload.name;
                state.id = action.payload._id;
            })
            .addCase(registerUser.rejected, (state, action) => {
                (state.loading = false), (state.error = action.payload.message);
            })

            // login
            .addCase(loginUser.pending,(state)=>{
                state.loading=true
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.name=action.payload.name
                state.id=action.payload.id 
                state.token=action.payload.accestoken
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.error=action.payload.message
            })
    },
});

export const {setCount}=userSlice.actions
export default userSlice.reducer;
