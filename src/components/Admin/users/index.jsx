import React, {useEffect, useState} from "react";
import {deleteUser, getAllUsers} from "../../../redux/Apirequest";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import TableUsers from "./child/TableUsers";
import jwt_decode from "jwt-decode";
import LineChartsIdeas from "../chart/LineChartsIdeas";
import "../loadingadmin.css"

const ManagerUsers = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const getAllUser = useSelector((state) => state.listUsers.users?.allUsers)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let axiosJWT = createAxios(user,dispatch,loginSuccess)
    const checkRole = jwt_decode(user.accessToken)
    const role = checkRole.roles.includes("Adminstrator")

    const fetchUser = async () => await getAllUsers(user?.accessToken, dispatch,axiosJWT)
    const fetchBanUser =  (userId) => deleteUser(axiosJWT,dispatch,user?.accessToken,userId)

    useEffect(() => {
            fetchUser()
    },[])
    
    return !role ? <Navigate to={"/home"}/> :   (
        <>
            {getAllUser?<>  <title>Manager User </title>
                <section className='flex' style={{display: "flex"}}>
                    <div className="" style={{margin: "30px", width: "100%"}}>
                        <div className="font-24px" style={{textAlign: "center", fontSize: "24px", fontWeight: "500"}}>
                            <h2 style={{padding: "30px"}}>
                                Manager User
                            </h2>
                        </div>
                        <TableUsers
                            getAllUsers={getAllUser}
                            fetchUser={fetchUser}
                            fetchBanUser={fetchBanUser}
                        />
                    </div>
                </section>
                <LineChartsIdeas
                getAllUser={getAllUser}
                />
            </> : <span className={"loader flex justify-center"}></span>

            }
        </>
    )
}
export default ManagerUsers;