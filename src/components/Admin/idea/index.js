import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {getAllIdeas} from "../../../redux/Apirequest";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";
import './ideaapi/style.css'
import React, {useEffect, useState} from 'react';
import TableIdeas from "./ideaapi/TableIdeas";
import jwt_decode from "jwt-decode"
import {toast} from "react-toastify";
import {Col, Container, Row} from "react-bootstrap";

export const Ideas = () => {
    const getAllIdea = useSelector((state) => state.listIdeas.ideas?.allIdeas)
    const user = useSelector((state) => state.auth.login?.currentUser)
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()

    const checkRole = jwt_decode(user.accessToken)
    const role = checkRole.roles.includes("Adminstrator")

    let axiosJWT = createAxios(user, dispatch, loginSuccess)

    const fetchIdeas = async (page) => {
        await getAllIdeas(user?.accessToken, dispatch, axiosJWT, page)
    }
    useEffect(() => {
        fetchIdeas(1);
    }, [])
    return!role ? <> <Navigate to={"/home"}/>{toast.warning("You can not allow to to that")} </> : (
        <>
            <title>MANAGER IDEAS</title>
            <Container className={"pb-2"} style={{height: "80vh"}}>
                <Row style={{maxWidth: "99%"}}>
                    <Row className="pb-2">
                        <Col>
                            <button
                                type="button"
                                className="inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                                download CSV
                            </button>
                        </Col>
                        <Col className={"text-4xl pb-1 flex justify-end items-center"}>
                            <h2>
                                Manager Ideas
                            </h2>
                        </Col>
                    </Row>
                        <TableIdeas
                            getAllIdea={getAllIdea}
                            fetchIdeas={fetchIdeas}
                            setPage={setPage}
                            page={page}
                        />
                </Row>
            </Container>
        </>
    )
}
export default Ideas