import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../redux/Apirequest";
import {Navigate} from "react-router-dom";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import jwt_decode from "jwt-decode";
import TotalUserNav from "./TotalUserNav";
import ManagerChart from "./ManagerChart";

const HomepageAdmin = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser)
    const getAllUser = useSelector((state) => state.listUsers.users?.allUsers)
    const getAllIdea = useSelector((state) => state.listIdeas.ideas?.allIdeas)
    const [animationChart, setAnimationChart] = useState(true)
    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth, dispatch, loginSuccess)
    const checkRole = jwt_decode(auth.accessToken)
    const role = checkRole.roles.includes("Adminstrator")
    const fetchUser = async () => await getAllUsers(auth?.accessToken, dispatch, axiosJWT)
    useEffect(() => {
        fetchUser()
    }, [])
    const handleToggleBar= () => {
        setAnimationChart(!animationChart)
    }

    console.log("checkdata",getAllIdea)
    return !role ? <Navigate to="/home"/> : (
        <>
            {getAllUser ? <section style={{transition: "width .9s ease-in"}}>
                    <Container>
                        <Row className={"pt-[24px] m-[1px] pb-[30px]"}>
                            <Row className={"flex justify-between font-bold"}>
                                <Col className={"text-4xl"}><h2> Dash Board ADMIN</h2></Col>
                                <Col className={"text-right font-bold"}>
                        <span
                            className="font-bold cursor-pointer bg-blue-200 inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                         DownLoad Zip
                    </span>
                                </Col>
                            </Row>
                        </Row>
                        <Row className={"flex justify-center"}>
                            <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500" style={{maxWidth: "75%"}}>
                                <span></span>
                            </Col>
                        </Row>
                        <Row className={"pt-5 mr-[30px] ml-[36px]"}>
                            <Col>
                                <Row className={"md:flex md:justify-center"}>
                                    <TotalUserNav
                                        getAllUser={getAllUser}
                                        handleToggleBar={handleToggleBar}
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
                           getAllUser = {getAllUser}
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