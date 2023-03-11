import Categories from "./categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {addCategory, deleteCategory, getAllCategories, updateCategory} from "../../../redux/Apirequest";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import {useEffect, useState} from "react";
import "./loaderManager.css"
import {Navigate, useOutletContext} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {getAllDepartmentsSuccess} from "../../../redux/departmentSlice";

const ManagerCategories = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser);
    const listAllCategories = useSelector((state) => state.departments.department?.allDepartments)
    const loading = useSelector((state) => state.departments.department?.isFetching)
    const check = jwt_decode(auth?.accessToken)
    const role = check?.roles.includes("Quality Assurance Manager")

    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth,dispatch,loginSuccess)

    const fetchListCategories = async () => getAllCategories(dispatch,axiosJWT,auth.accessToken)
    const fetchAddCategory = async (data) => addCategory(dispatch,axiosJWT,auth.accessToken,data)
    const fetchDeleteCategory = async (id) => deleteCategory(dispatch,axiosJWT,auth.accessToken,id)
    const fetchUpdateCategory = async (data) => updateCategory(dispatch,axiosJWT,auth.accessToken,data)

    useEffect(()=>{
        fetchListCategories()
    },[])
    return !role? <Navigate to={"/admin"}/> : <>{loading ?
        <div className="flex justify-center pt-4"><span className="loader-manager"></span></div> :
        (
        <>
            <Categories
                listAllCategories={listAllCategories}
                fetchListCategories={fetchListCategories}
                fetchAddCategory={fetchAddCategory}
                fetchDeleteCategory={fetchDeleteCategory}
                fetchUpdateCategory={fetchUpdateCategory}
                loading={loading}
                axiosJWT={axiosJWT}
            />
        </>
        )
        }</>
}
export default ManagerCategories