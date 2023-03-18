import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import ManagerData from "./child/ManagerData";
import {deleteUser, getAllUsers} from "../../../redux/Apirequest";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice"
import jwt_decode from "jwt-decode";
import LineChartsIdeas from "../chart/LineChartsIdeas";
import "../loadingadmin.css"


const ManagerUsers = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const getAllUser = useSelector((state) => state.listUsers.users?.allUsers)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let axiosJWT = createAxios(user, dispatch, loginSuccess)
    const checkRole = jwt_decode(user.accessToken)
    const role = checkRole.roles.includes("Adminstrator")

    const fetchUser = async () => await getAllUsers(user?.accessToken, dispatch, axiosJWT)
    const fetchBanUser = (userId) => deleteUser(axiosJWT, dispatch, user?.accessToken, userId)

    useEffect(() => {
        fetchUser()
    }, [])
    // console.log("check")

    return !role ? <Navigate to={"/home"}/> : (
        <>
            {getAllUser ? <>
                <title> Manager User </title>
                <Container>
                    <ManagerData
                        getAllUser={getAllUser}
                        fetchBanUser={fetchBanUser}
                        fetchUser={fetchUser}
                    />
                    <div className={"flex justify-center"}><strong>Table:</strong>Manager User</div>
                    <div className={"h-[24px]"}></div>
                    <Row>
                        <Col className={"h-[250px] flex justify-center"}>
                            <LineChartsIdeas
                                getAllUser={getAllUser}
                            />
                        </Col>
                    </Row>
                </Container>
            </> : <span className={"loader flex justify-center"}></span>

            }
        </>
    )
}
export default ManagerUsers;