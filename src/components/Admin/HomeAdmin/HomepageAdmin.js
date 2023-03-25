import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories, getAllDepartments, getAllUsers} from "../../../redux/Apirequest";
import {Navigate} from "react-router-dom";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import jwt_decode from "jwt-decode";
import TotalUserNav from "./TotalUserNav";
import ManagerChart from "./ManagerChart";
import axios from "axios";

const HomepageAdmin = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser)
    const getAllUser = useSelector((state) => state.listUsers.users?.allUsers)
    const getAllIdea = useSelector((state) => state.listIdeas.ideas?.allIdeas)
    const listDepartments = useSelector((state) => state.departments.listDepartments?.allDepartments)
    const listAllCategories = useSelector((state) => state.departments.categories?.allCategories)
    const [animationChart, setAnimationChart] = useState(true)
    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth, dispatch, loginSuccess)
    const checkRole = jwt_decode(auth.accessToken)
    const role = checkRole.roles.includes("Quality Assurance Manager")
    const fetchUser = async () => await getAllUsers(auth?.accessToken, dispatch, axiosJWT)
    useEffect(() => {
        fetchUser()
    }, [])
    const fetchAllDepartments = async () => await getAllDepartments(dispatch, axiosJWT, auth?.accessToken)
    useEffect(() => {
        fetchAllDepartments()
    }, [])
    const fetchListCategories = () => getAllCategories(dispatch, axiosJWT, auth.accessToken)
    useEffect(() => {
        fetchListCategories()
    }, [])
    const handleToggleBar = () => {
        setAnimationChart(!animationChart)
    }
    const [checkDepartment, setCheckDepartment] = useState(false)
    const handleClickDetailDepartment = () => {
        setCheckDepartment(!checkDepartment)
    }
    console.log("get all",getAllIdea)
    return !role ? <Navigate to="/home"/> : (
        <>
            <title>Admin</title>
            {getAllUser && listDepartments && listAllCategories ?
                <section style={{transition: "width .9s ease-in"}}>
                    <Container>
                        <Row className={"pt-[24px] m-[1px] pb-[30px]"}>
                            <Row className={"flex text-center font-bold"}>
                                <Col className={"text-4xl "}><h2> Dash Board Management</h2></Col>
                            </Row>
                        </Row>
                        <Row className={"flex justify-center"}>
                            <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500"
                                 style={{maxWidth: "75%"}}>
                                <span></span>
                            </Col>
                        </Row>
                        {checkDepartment ?
                            <span>
                            <button
                                type="button"
                                className={"inline-block rounded-full bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"}
                                onClick={handleClickDetailDepartment}>
                              back
                            </button>
                         </span>
                            :
                            <></>
                        }
                        <Row className={"pt-5 mr-[30px] ml-[36px]"}>
                            <Col>
                                <Row className={"md:flex md:justify-center"}>
                                    <TotalUserNav
                                        listDepartments={listDepartments}
                                        getAllUser={getAllUser}
                                        handleToggleBar={handleToggleBar}
                                        checkDepartment={checkDepartment}
                                        listAllCategories={listAllCategories}
                                        handleClickDetailDepartment={handleClickDetailDepartment}
                                    />
                                </Row>
                            </Col>
                        </Row>
                        <div className={"pt-[10px] h-[48px]"}>
                            {animationChart ?
                                <button
                                    type="button"
                                    className="inline-block rounded-full bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
                                    onClick={handleToggleBar}
                                >
                                    Bar Chart
                                </button>
                                :
                                <button
                                    type="button"
                                    className="inline-block rounded-full bg-warning px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]"
                                    onClick={handleToggleBar}
                                >

                                    Line Chart
                                </button>
                            }

                        </div>
                        <Row className={"relative h-[300px] w-full overflow-hidden"}>
                            <ManagerChart
                                getAllUser={getAllUser}
                                animationChart={animationChart}
                                setAnimationChart={setAnimationChart}
                            />
                        </Row>
                    </Container>
                </section> :
                <div>Loading...</div>}
        </>
    )
}
export default HomepageAdmin