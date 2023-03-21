import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import jwt_decode from "jwt-decode"
import {toast} from "react-toastify";
import IndexAdmin from "../../Admin";
import IndexManager from "../../manager-departments";

const Authorization = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser);
    const checkAdmin = jwt_decode(auth?.accessToken)
    const checkRole = checkAdmin?.roles.find(x => x === 'Quality Assurance Manager' || x === "Adminstrator")
    const checkRoleAdmin = checkAdmin?.roles.find(x => x === "Adminstrator")
    // console.log("check", checkRoleAdmin)
    return !checkRole
        ?
        <>
            <Navigate to="/login"/>
            {toast.warn(`Authorization your role is ${checkAdmin.roles}`)}
        </>
        :
        <>
            {
                checkRoleAdmin ? <><IndexAdmin
                        auth={auth}
                        checkRoleAdmin={checkRoleAdmin}
                    />
                    </> :
                    <IndexManager
                        auth={auth}
                        checkRoleAdmin={checkRoleAdmin}
                    />
            }
        </>

}
export default Authorization