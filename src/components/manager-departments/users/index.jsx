import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import jwt_decode from "jwt-decode";
import {deleteUser, getAllUsers} from "../../../redux/Apirequest";
import {useEffect} from "react";
import TableUsers from "../../Admin/users/child/TableUsers";

const ManagerUsersCategory = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser)
    let getAllUsersManager = useSelector((state) => state.listUsers.users?.allUsers)

    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth,dispatch,loginSuccess)
    const checkRole = jwt_decode(auth.accessToken)
    const role = checkRole.roles.includes("Quality Assurance Manager")
    const fetchUserManager = async () => await getAllUsers(auth?.accessToken, dispatch,axiosJWT)
    useEffect(() => {
        fetchUserManager()
    },[])
    console.log("check use",getAllUsersManager)

    return !role ? <Navigate to={"/home"}/> :  (
        <TableUsers
            getAllUsers={getAllUsersManager}
            fetchUser={fetchUserManager}
        />
    )
}
export default ManagerUsersCategory