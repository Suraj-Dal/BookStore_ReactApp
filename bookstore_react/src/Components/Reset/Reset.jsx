import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import './Reset.css'
import bookimg from '../../Assets/book.png'
import { reset } from '../../Services/UserService';
import { useNavigate } from 'react-router-dom'

function Reset() {
    const navigate = useNavigate()
    const [passwordObj, setPasswordObj] = useState({ Password: "", Confirm: "" })

    const takePassword = (event) => {
        setPasswordObj((prevState) => ({ ...prevState, Password: event.target.value }));

    };
    const takeConfirm = (event) => {
        setPasswordObj((prevState) => ({ ...prevState, Confirm: event.target.value }));

    };

    const next = async () => {
        let response = await reset(passwordObj);
        console.log("password reset successfully")
        if (response.success)
        {
            navigate('/')
        }
    }

    return (

        <div>
            <div className='headfp'>
                <img src={bookimg} style={{ width: "28px", height: "23px" }} />
                <h4 style={{ fontWeight: "500", color: "white" }}>BookStore</h4>
            </div>
            <div className='boxfp'>
                <div className='capfp'>
                    <h2 style={{ fontWeight: "500" }}>Reset Your Password</h2>
                </div>
                <div className='mainfp'>
                    <div className='passfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Enter Link here..</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='email'
                            size='small'
                            fullWidth />
                    </div>
                    <div className='passfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Password</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='password'
                            size='small'
                            onChange={takePassword}
                            fullWidth />
                    </div>
                    <div className='passfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Confirm Password</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='password'
                            size='small'
                            onChange={takeConfirm}
                            fullWidth />
                    </div>
                    <Button variant="contained" fullWidth style={{ backgroundColor: "#A03037", width: "25vw", marginLeft: "3.4rem" }} onClick={next}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default Reset