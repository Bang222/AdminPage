import {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import {getAllCategories} from "../../../redux/Apirequest";
import ManagerNav from "./ManagerNav";
import PieChart from "../chart/PieChart";

const HomepageManager = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser);
    const listAllCategories = useSelector((state) => state.departments.department?.allDepartments)

    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth, dispatch, loginSuccess)

    const fetchListCategories = () => getAllCategories(dispatch, axiosJWT, auth.accessToken)
    useEffect(() => {
        fetchListCategories()
    }, [])
    return (
        <>
            <section>
                <Container>
                    <Row className={"pt-[24px] m-[1px] pb-[30px]"}>
                        <Row className={"flex justify-between text-center font-bold"}>
                            <Col className={"text-4xl"}><h2> Dash Board Manager</h2></Col>
                        </Row>
                    </Row>
                    <Row className={"flex justify-center"}>
                        <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500" style={{maxWidth: "75%"}}>
                            <span></span>
                        </Col>
                    </Row>
                    <Row className={"pt-5 mr-[30px] ml-[36px]"}>
                        <Col className={"flex justify-between m-2"}>
                            {listAllCategories ? <ManagerNav
                                listAllCategories={listAllCategories}/> : <div>Loading</div>}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="flex justify-center w-[300px] h-[300px]">
                            {
                                listAllCategories ? <PieChart
                                    listAllCategories={listAllCategories}
                                /> : <div>Loading...</div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomepageManager


