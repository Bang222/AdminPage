import {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import {getAllCategories} from "../../../redux/Apirequest";
import ManagerNav from "./ManagerNav";

const HomepageManager = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser);
    const listAllCategories = useSelector((state) => state.departments.department?.allDepartments)

    const dispatch = useDispatch()
    let axiosJWT = createAxios(auth, dispatch, loginSuccess)

    const fetchListCategories =  () =>  getAllCategories(dispatch, axiosJWT, auth.accessToken)
     useEffect(()=>{
         fetchListCategories()
     },[])
    return (
        <>
            <section>
                <Container>
                    <Row className={"pt-[24px] m-[1px] pb-[30px]"}>
                        <Row className={"flex justify-between font-bold"}>
                            <Col className={"text-4xl"}><h2> Dash Board Manager</h2></Col>
                            <Col className={"text-right font-bold"}>
                        <p className="cursor-pointer hover:bg-blue-300 inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                         DownLoad Zip
                    </p>
                            </Col>
                        </Row>
                    </Row>
                    <Row className={"flex justify-center"}>
                        <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500" style={{maxWidth:"75%"}}>
                            <span></span>
                        </Col>
                    </Row>
                    <Row className={"pt-5 mr-[30px] ml-[36px]"}>
                        <Col className={"flex justify-between m-2"}>
                            {listAllCategories? <ManagerNav
                                listAllCategories={listAllCategories}/> : <div>Loading</div>}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomepageManager


