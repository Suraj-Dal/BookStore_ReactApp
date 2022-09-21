import React from 'react'
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import './Signin.css'
import { signIn } from '../../Services/UserService';
import { useNavigate } from 'react-router-dom'

const emailRegex =
    /^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function Signin(props) {
    const navigate = useNavigate()
    const [signinObj, setSigninObj] = React.useState({ EmailID: "", Password: "" });
    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });

    const takeEmail = (event) => {
        setSigninObj((prevState) => ({ ...prevState, EmailID: event.target.value }));
    };
    const takePassword = (event) => {
        setSigninObj((abc) => ({ ...abc, Password: event.target.value }));

    };

    const submit = async () => {
        const emailTest = emailRegex.test(signinObj.EmailID);
        const passwordTest = passwordRegex.test(signinObj.Password);
        console.log(emailTest, passwordTest);

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
        if (emailTest === true && passwordTest === true) {
            let response = await signIn(signinObj);
            navigate('/Dashboard')
            console.log("login successfully")
            localStorage.setItem("Token", response?.data?.data)
        }
    };

    const listenToForget = () => {
        navigate('/Forget')
    }

    return (
        <>
            <div className='headersi'>
                <h2 style={{ fontWeight: "500", cursor: "pointer" }} >LOGIN</h2>
                <h2 style={{ color: "#878787", fontWeight: "500", cursor: "pointer" }} onClick={() => props.listenToSignin()}>SIGNUP</h2>
            </div>
            <div className='emailsi'>
                <InputLabel className='inputsi' style={{ fontSize: "small" }}>Email Id</InputLabel>
                <TextField
                    className='inputsi'
                    variant="outlined"
                    type='email'
                    size='small'
                    onChange={takeEmail}
                    error={regexObj.emailBorder}
                    helperText={regexObj.emailHelper}
                    fullWidth />
            </div>
            <div className='passwordsi'>
                <InputLabel className='inputsi' style={{ fontSize: "small" }}>Password</InputLabel>
                <TextField
                    type="password"
                    className='inputsi'
                    size='small'
                    onChange={takePassword}
                    error={regexObj.passwordBorder}
                    helperText={regexObj.passwordHelper}
                    fullWidth />
                <a style={{ cursor: "pointer" }} onClick={listenToForget}>Forgot Password?</a>
            </div>
            <div className='loginbtn'>
                <Button variant="contained" fullWidth style={{ backgroundColor: "#A03037" }} onClick={submit}>Login</Button>
            </div>
            <div className="footersi">
                <div className="linesi"></div>
                <div className='orsi'>OR</div>
                <div className="linesi"></div>
            </div>
            <div className='loginoptions'>
                <Button id='facebook' variant="contained">Facebook</Button>
                <Button id='google' variant="outlined" style={{ backgroundColor: "#F5F5F5", borderColor: "#E4E4E4", color: "black" }}>Google</Button>
            </div>
        </>
    )
}

export default Signin

