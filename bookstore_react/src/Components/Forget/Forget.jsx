import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import './Forget.css'
import bookimg from '../../Assets/book.png'
import { forget } from '../../Services/UserService';
import {useNavigate} from 'react-router-dom'

function Forget() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const takeEmail = (event) => {
        setEmail(event.target.value)
    };

    const submit = async () => {
        let response = await forget(email)
        localStorage.setItem("Token", response?.data?.data)
        if (response.data.data != null)
        {
            navigate('/Reset')
        }
    }
    const signup = () =>{
        navigate('/')
    }

    return (
        <div>
            <div className='headfp'>
                <img src={bookimg} style={{ width: "28px", height: "23px" }} />
                <h4 style={{ fontWeight: "500", color: "white" }}>BookStore</h4>
            </div>
            <div className='boxfp'>
                <div className='capfp'>
                    <h2 style={{ fontWeight: "500" }}>Forgot Your Password?</h2>
                </div>
                <div className='mainfp'>
                    <div className='namefp'>
                        <p>Enter your email address and we'll send you a link to reset password.</p>
                    </div>
                    <div className='emailfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Email ID</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='email'
                            size='small'
                            onChange={takeEmail}
                            fullWidth />
                    </div>
                    <Button variant="contained" fullWidth style={{ backgroundColor: "#A03037", width: "25vw", marginLeft: "3.4rem" }} onClick={submit}>Reset Password</Button>
                    <div className='createacc' onClick={signup}>
                        CREATE ACCOUNT
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forget