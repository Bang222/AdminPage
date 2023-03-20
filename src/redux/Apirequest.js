import {loginFailure, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess,} from './authSlice'
import axios from 'axios'
import {
    deleteUserError, deleteUserStart, deleteUserSuccess,
    editUserError,
    editUserStart,
    editUserSuccess,
    getUserError,
    getUserStart,
    getUserSuccess
} from "./userSlice";
import {
    deleteError, deleteIdeasError, deleteIdeasSuccess, deleteIdeaStart,
    deleteStart, deleteSuccess,
    getCommentError,
    getCommentStart,
    getCommentSuccess,
    getIdeasError,
    getIdeasSuccess,
    getIdeaStart, updateIdeaFailure, updateIdeaStart, updateIdeaSuccess
} from "./ideasSlice";
import {
    addCategoryFailure,
    addCategoryStart,
    addCategorySuccess,
    deleteCategoryFailure,
    deleteCategoryStart,
    deleteCategorySuccess,
    getAllDepartmentsFailure,
    getAllDepartmentsStart,
    getAllDepartmentsSuccess, updateCategoryFailure, updateCategoryStart, updateCategorySuccess
} from "./departmentSlice";
import jwt_decode from "jwt-decode";

export const loginUser = async (auth, dispatch, navigate) => {
    dispatch(loginStart());
    try {

        const res = await axios.post('http://localhost:3001/auth/login', auth)
        dispatch(loginSuccess(res.data))
        const checkRole = jwt_decode(res.data?.accessToken)
        if (checkRole.roles.includes("Adminstrator")) {
            navigate("/admin");
        } else navigate("/home")
    } catch (err) {
        dispatch(loginFailure())
    }
}
export const editComment = async (accessToken, dispatch, axiosJWT, Data, CommentId) => {
    dispatch(getCommentStart())
    try {
        const res = await axiosJWT.put(`http://localhost:3001/comment/edit?id=${CommentId}`, Data, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        getCommentSuccess(res.data)
    } catch (err) {
        dispatch(getCommentError)
        // console.log(err)
    }
}
export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUserStart());
    try {
        const res = await axiosJWT.get("http://localhost:3001/user/users", {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserError(err));
    }
}
export const getAllIdeas = async (accessToken, dispatch, axiosJWT, page) => {
    dispatch(getIdeaStart())
    try {
        const res = await axiosJWT.get(`http://localhost:3001/idieas/all?order-field=id&orderby=asc&page=${page}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(getIdeasSuccess(res.data))
    } catch (err) {
        getIdeasError()
    }
}
export const updateIdeas = async (dispatch, axiosJWT, accessToken, data) => {
    dispatch(updateIdeaStart())
    try {
        const res = await axiosJWT.post('http://localhost:3001/idieas/update', data,
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        dispatch(updateIdeaSuccess(res.data))
        // console.log("check",res.data)
    } catch (err) {
        dispatch(updateIdeaFailure(err))
    }
}
export const deleteIdea = async (accessToken, dispatch, axiosJWT, id) => {
    dispatch(deleteIdeaStart())
    try {
        const res = await axiosJWT.post("http://localhost:3001/idieas/delete", id, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(deleteIdeasSuccess(res.data))
    } catch (err) {
        dispatch(deleteIdeasError)
    }
}
export const editUser = async (accessToken, dispatch, roles, userId, axiosJWT, navigate) => {
    dispatch(editUserStart())
    try {
        const res = await axiosJWT.post("http://localhost:3001/user/update", {
            userId,
            roles
        }, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(editUserSuccess(res.data));
        navigate("/manager-users")
        // console.log(res.data)
    } catch (err) {
        dispatch(editUserError())
        // console.log("check")
    }
}
export const logOut = async (dispatch, data) => {
    dispatch(logoutStart())
    try {
        const res = await axios.post("http://localhost:3001/auth/logout", data)
        dispatch(logoutSuccess(res.data))
        localStorage.clear();
        // console.log("check oke")
    } catch (e) {
        dispatch(logoutFailed())
        // console.log("log out Err")
    }
}
export const deleteComment = async (axiosJWT, dispatch, accessToken, id) => {
    dispatch(deleteStart())
    try {
        const res = await axiosJWT.delete(`http://localhost:3001/comment/delete?id=${id}`,
            {headers: {Authorization: `Bearer ${accessToken}`}}
        )
        dispatch(deleteSuccess(res.data))
        // console.log(res.data)
    } catch (e) {
        dispatch(deleteError(e))
    }
}
export const deleteUser = async (axiosJWT, dispatch, accessToken, userId) => {
    dispatch(deleteUserStart())
    try {
        const res = await axiosJWT.post("http://localhost:3001/user/delete", {
            userId
        }, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(deleteUserSuccess(res.data))
        // console.log(res.data)
    } catch (e) {
        dispatch(deleteUserError(e))
        // console.log("check")
    }
}
export const getAllCategories = async (dispatch, axiosJWT, accessToken) => {
    dispatch(getAllDepartmentsStart())
    try {
        const res = await axiosJWT.get('http://localhost:3001/category/all', {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(getAllDepartmentsSuccess(res.data))
    } catch (err) {
        dispatch(getAllDepartmentsFailure(err))
        console.log(err)
    }
}
export const addCategory = async (dispatch, axiosJWT, accessToken, data) => {
    dispatch(addCategoryStart())
    try {
        const res = await axiosJWT.post('http://localhost:3001/category/create', data, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(addCategorySuccess(res.data))
        // console.log("check", res.data)
    } catch (err) {
        dispatch(addCategoryFailure(err))
    }
}
export const deleteCategory = async (dispatch, axiosJWT, accessToken, id) => {
    dispatch(deleteCategoryStart())
    try {
        const res = await axiosJWT.post('http://localhost:3001/category/delete', id, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(deleteCategorySuccess(res.data))
        // console.log("check",res.data)
    } catch (err) {
        dispatch(deleteCategoryFailure(err))
    }
}
export const updateCategory = async (dispatch, axiosJWT, accessToken, data) => {
    dispatch(updateCategoryStart())
    try {
        const res = await axiosJWT.post('http://localhost:3001/category/update', data, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(updateCategorySuccess(res.data))
        // console.log("check",res.data)
    } catch (err) {
        dispatch(updateCategoryFailure(err))
    }
}

