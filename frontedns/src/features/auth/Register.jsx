import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../services/axiosInstance";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post("/user/register",{email,password});
            toast.success("Register succesfull");
            navigate('/login')
        } catch (er) {
          toast.error(er.response.data.message)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input
                    value={email}
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}
                ></input>
                <label>password</label>
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                ></input>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Register;
