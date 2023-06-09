import './style.css';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from "../../../redux/Apirequest";
import { useFormik } from "formik";
import * as Yup from "yup";


const Login = () => {
    const [showHidePassword, setShowHidePassword] = useState(true)
    const err = useSelector((state) => state.auth.login?.err);
    const pending = useSelector((state) => state.auth.login?.isFetching);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(20, "Maximum 20 characters")
                .min(6, "Minimum 6 characters")
                .required("Please Input UserName"),
            password: Yup.string()
                .required("Please Input Password")
                // .matches(
                //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{4,19}$/,
                //     "Minimum 6 characters, at least one letter, one number, one special character"
                // ),
        }),
        onSubmit: (values) => {
            const login = {
                username: values.username,
                password: values.password,
            };
            loginUser(login, dispatch, navigate);
        },
    });
    const handleShowHidePassword = () => {
        setShowHidePassword(!showHidePassword)
    }
    return (
        <>
            <title>Login</title>
            <section className="login-section">
                <div className="login-box">
                    <h2>ADMIN PAGE</h2>
                    <form onSubmit={formik.handleSubmit} >
                        <div className="user-box">
                            <input type='text'
                                   placeholder='User Name'
                                   name='username'
                                   id="username"
                                   required
                                   value={formik.values.username}
                                   onChange={formik.handleChange}
                            />
                        </div>
                        <div className={"h-[12px]"}></div>
                        <p className="errorMsg">{formik.errors.username}</p>
                        <div className={"h-[20px]"}></div>
                        <div className="user-box">
                            {showHidePassword ? <>
                                    <input type='password'
                                           id='password'
                                           placeholder='Password'
                                           name='password'
                                           required
                                           value={formik.values.password}
                                           onChange={formik.handleChange}

                                    />
                                    <p className="absolute bottom-50 right-3 top-[24px] cursor-pointer"
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
                                           value={formik.values.password}
                                           onChange={formik.handleChange}/>
                                    <p className="absolute bottom-50 right-3 top-[24px] cursor-pointer"
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
                            <div className={"h-[20px]"}></div>
                            <p className="errorMsg">{formik.errors.password}</p>
                        </div>
                        {!pending ? <button className="submit-button"
                           type={"submit"}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Log in
                            </button>
                            :
                            <button type={"submit"} className="submit-button">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Loading...
                            </button>
                        }
                    </form>
                    {!err ? <></> :<p className={"errorMsg"}>Password or UserName Invalid</p>}
                </div>
            </section>

        </>
    )
}

export default Login;