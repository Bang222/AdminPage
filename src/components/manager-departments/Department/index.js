import Categories from "./categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {addCategory, deleteCategory, getAllCategories, updateCategory} from "../../../redux/Apirequest";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import {useEffect, useState} from "react";
import "./loaderManager.css"
import {Navigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

const ManagerCategories = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser);
    const listAllCategories = useSelector((state) => state.departments.department?.allDepartments)
    const check = jwt_decode(auth?.accessToken)
    const role = check?.roles.includes("Quality Assurance Manager")

    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth, dispatch, loginSuccess)

    const fetchListCategories =  () =>  getAllCategories(dispatch, axiosJWT, auth.accessToken)
    const fetchAddCategory =  (data) =>  addCategory(dispatch, axiosJWT, auth.accessToken, data)
    const fetchDeleteCategory = (id) => deleteCategory(dispatch, axiosJWT, auth.accessToken, id)
    const fetchUpdateCategory = (data) => updateCategory(dispatch, axiosJWT, auth.accessToken, data)

    useEffect(() => {
        fetchListCategories()
    }, [])

    return !role ? <Navigate to={"/admin"}/> : <>
        <title>Categories</title>
        { !listAllCategories ?
        <div className="flex justify-center pt-4"><span className="loader-manager"></span></div> :
        (
            <>
            <div className="flex justify-center pt-[12px]">
                <Categories
                    listAllCategories={listAllCategories}
                    fetchListCategories={fetchListCategories}
                    fetchAddCategory={fetchAddCategory}
                    fetchDeleteCategory={fetchDeleteCategory}
                    fetchUpdateCategory={fetchUpdateCategory}
                />
            </div>
            </>
        )
    }</>
}
export default ManagerCategories