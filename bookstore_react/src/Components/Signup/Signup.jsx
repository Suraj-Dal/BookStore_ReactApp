import React from 'react'
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import './Signup.css'
import { signUp } from '../../Services/UserService';

const emailRegex =
    /^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const fullNameRegex = /^[a-zA-Z ]*$/;
const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
function Signup(props) {
    const [signupObj, setSignupObj] = React.useState({ FullName: "", EmailID: "", Password: "", Phone: "" });
    const [regexObj, setRegexObj] = React.useState({
        fullNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        phoneBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takefullName = (event) => {
        setSignupObj((prevState) => ({ ...prevState, FullName: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignupObj((prevState) => ({ ...prevState, EmailID: event.target.value }));
    };
    const takePassword = (event) => {
        setSignupObj((prevState) => ({ ...prevState, Password: event.target.value }));

    };
    const takePhone = (event) => {
        setSignupObj((prevState) => ({ ...prevState, Phone: event.target.value }));
    };

    const submit = async () => {
        const fullNameTest = fullNameRegex.test(signupObj.FullName);
        const phoneTest = phoneRegex.test(signupObj.Phone);
        const emailTest = emailRegex.test(signupObj.EmailID);
        const passwordTest = passwordRegex.test(signupObj.Password);
        console.log(fullNameTest, phoneTest, emailTest, passwordTest);

        if (fullNameTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                fullNameBorder: true,
                fullNameHelper: "enter correct name",
            }));
        }
        else if (fullNameTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                fullNameBorder: false,
                fullNameHelper: "",
            }));
        }

        if (phoneTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                phoneBorder: true,
                phoneHelper: "enter correct phone number",
            }));
        }
        else if (phoneTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                phoneBorder: false,
                phoneHelper: "",
            }));
        }

        if (emailTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "enter correct email",
            }));
        }
        else if (emailTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                emailBorder: false,
                emailHelper: "",
            }));
        }

        if (passwordTest === false) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "enter correct password",
            }));
        }
        else if (passwordTest === true) {
            setRegexObj((prevState) => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: "",
            }));
        }
        if (fullNameTest === true && phoneTest === true && emailTest === true && passwordTest === true) {
            let response = await signUp(signupObj);
            console.log(response);
        }
    };

    return (
        <>
            <div className='headersu'>
                <h2 style={{ color: "#878787", fontWeight: "500", cursor: "pointer" }} onClick={() => props.listenToSignup()}>LOGIN</h2>
                <h2 style={{ fontWeight: "500", cursor: "pointer" }}>SIGNUP</h2>
            </div>
            <div className='namesu'>
                <InputLabel className='inputsu' style={{ fontSize: "small" }}>Full Name</InputLabel>
                <TextField
                    className='inputsu'
                    variant="outlined"
                    type='email'
                    size='small'
                    onChange={takefullName}
                    error={regexObj.fullNameBorder}
                    helperText={regexObj.fullNameHelper}
                    fullWidth />
            </div>
            <div className='emailsu'>
                <InputLabel className='inputsu' style={{ fontSize: "small" }}>Email Id</InputLabel>
                <TextField
                    className='inputsu'
                    variant="outlined"
                    type='email'
                    size='small'
                    onChange={takeEmail}
                    error={regexObj.emailBorder}
                    helperText={regexObj.emailHelper}
                    fullWidth />
            </div>
            <div className='passwordsu'>
                <InputLabel className='inputsu' style={{ fontSize: "small" }}>Password</InputLabel>
                <TextField
                    type="password"
                    className='inputsu'
                    size='small'
                    onChange={takePassword}
                    error={regexObj.passwordBorder}
                    helperText={regexObj.passwordHelper}
                    fullWidth />
            </div>
            <div className='phonesu'>
                <InputLabel className='inputsu' style={{ fontSize: "small" }}>Phone</InputLabel>
                <TextField
                    className='inputsu'
                    variant="outlined"
                    type='email'
                    size='small'
                    onChange={takePhone}
                    error={regexObj.phoneBorder}
                    helperText={regexObj.phoneHelper}
                    fullWidth />
            </div>
            <div className='signupbtn'>
                <Button variant="contained" fullWidth style={{ backgroundColor: "#A03037" }} onClick={submit}>Sign Up</Button>
            </div>

        </>
    )
}

export default Signup

