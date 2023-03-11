import './style.css';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import isEmpty from "validator/es/lib/isEmpty";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from "../../../redux/Apirequest";


const Login = () => {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [validatorMsg, setValidatorMsg] = useState({});
    const [showHidePassword, setShowHidePassword] = useState(true)
    const pending = useSelector((state) => state.auth.login?.isFetching);
    const err = useSelector((state) => state.auth.login?.errors);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const validate = () => {
        const errors = {};
        if (username.length < 4) {
            errors.username = ' User Name is to short';
            console.log('check>>', username);
        } else if (isEmpty(username)) {
            errors.username = 'Please enter your name'
        }
        if (!isStrongPassword(password)) {
            errors.password = 'Password must be 7-19 characters and contain at least one letter, one number and a special character'
        } else if (isEmpty(password)) {
            errors.password = 'Please enter your password'
        }
        setValidatorMsg(errors)
        if (Object.keys(errors).length > 0) return false
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const login = {
            username: username,
            password: password
        }
        await loginUser(login, dispatch, navigate)
    }
    const handleShowHidePassword = () => {
        setShowHidePassword(!showHidePassword)
    }
    return (
        <>
            <title>LOG IN</title>
            <div className='box'>
                <section id='login' className='container' onSubmit={handleSubmit}>
                    <form className='form'>
                        <div className='ls'/>
                        <div className='formGroup'>
                            <span className='kt1'>ADMIN</span>
                        </div>
                        <div className='formGroup form-floating'>
                            <input type='text' placeholder='User Name' name='username'
                                   onChange={(e) => setusername(e.target.value)}/>
                        </div>
                        <p className="errorMsg">{validatorMsg.username}</p>
                        <div className='formGroup relative'>
                            {showHidePassword ? <>
                                    <input type='password' id='password' placeholder='Password'
                                           onChange={(e) => setPassword(e.target.value)}/>
                                    <p className="absolute bottom-50 right-12 cursor-pointer"
                                       onClick={handleShowHidePassword}
                                    ><i style={{
                                        font: "normal normal normal 16px/1 FontAwesome",
                                        fontSize: "inherit",
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white"
                                    }} className="fa-thin fa-eye-slash"/></p>
                                </> :
                                <>
                                    <input type='text' id='password' placeholder='Password'
                                           onChange={(e) => setPassword(e.target.value)}/>
                                    <p className="absolute bottom-50 right-12 cursor-pointer"
                                       onClick={handleShowHidePassword}
                                    ><i style={{
                                        font: "normal normal normal 16px/1 FontAwesome",
                                        fontSize: "inherit",
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white"
                                    }} className="fa-thin fa-eye"/></p>
                                </>
                            }
                        </div>
                        <p className="errorMsg">{validatorMsg.password}</p>
                        <div className='formGroup' style={{paddingTop: "20px"}}>
                            {pending ? <span className="loader-log_in"></span> :
                                <button type='submit' className='btn2'> Login </button>}
                        </div>
                        {!err ? <></> :
                            <p className="errorMsg" style={{paddingTop: "20px", textAlign: "center"}}>Invalid UserName
                                or
                                Password </p>}
                    </form>
                </section>
            </div>
        </>
    )
}

export default Login;