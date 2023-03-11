import {useEffect, useState} from "react";
import {deleteUser, getAllUsers} from "../../../redux/Apirequest";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import TableUsers from "./child/TableUsers";
import jwt_decode from "jwt-decode";

const ManagerUsers = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    let getAllUser = useSelector((state) => state.listUsers.users?.allUsers)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let axiosJWT = createAxios(user,dispatch,loginSuccess)
    const checkRole = jwt_decode(user.accessToken)
    const role = checkRole.roles.includes("Adminstrator")

    const fetchUser = async () => await getAllUsers(user?.accessToken, dispatch,axiosJWT)
    const fetchBanUser = async (userId) => await deleteUser(axiosJWT,dispatch,user?.accessToken,userId)

    useEffect(() => {
        if(!role){
            navigate("/home")
        }
        if (user?.accessToken) {
            fetchUser()
        }
    },[])
    
    return !role ? <Navigate to={"/home"}/> :   (
        <>
            <title>Manager User </title>
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
        </>
    )
}
export default ManagerUsers;