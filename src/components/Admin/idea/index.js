import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useLayoutEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import {deleteIdea, getAllIdeas, updateIdeas} from "../../../redux/Apirequest";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";
import ManagerIdeas from "./ideaapi/ManagerIdeas";
import '../loadingadmin.css'


const Ideas = () => {
    const [page, setPage] = useState(1);
    const getAllIdea = useSelector((state) => state.listIdeas.ideas?.allIdeas)
    const user = useSelector((state) => state.auth.login?.currentUser)
    const loading = useSelector((state) => state.listIdeas.ideas?.isFetching)
    const dispatch = useDispatch()
    let axiosJWT = createAxios(user, dispatch, loginSuccess)

    const checkRole = jwt_decode(user?.accessToken)
    const role = checkRole.roles?.includes("Quality Assurance Manager")
    const fetchIdeas = (page) => getAllIdeas(user?.accessToken, dispatch, axiosJWT, page)
    const fetchUpdateIdeas = (data) => updateIdeas(dispatch, axiosJWT, user?.accessToken, data)
    const fetchDeleteIdeas = (id) => deleteIdea(user?.accessToken,dispatch, axiosJWT, id)
    useEffect(() => {
        fetchIdeas(1)
    }, [])
    return !role ? <> <Navigate to={"/home"}/>{toast.warning("You can not allow to to that")} </>
        : getAllIdea ?
            (
                <>
                    <title>Manager-ideas</title>
                    <ManagerIdeas
                        getAllIdea={getAllIdea}
                        setPage={setPage}
                        page={page}
                        loading={loading}
                        fetchIdeas={fetchIdeas}
                        fetchUpdateIdeas={fetchUpdateIdeas}
                        fetchDeleteIdeas={fetchDeleteIdeas}
                    />
                </>
            ) : <div className="flex justify-center pt-4"><span className="loader"></span></div>
}
export default Ideas