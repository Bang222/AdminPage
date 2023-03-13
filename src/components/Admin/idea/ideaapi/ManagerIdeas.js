import './style.css'
import React, {useEffect, useLayoutEffect, useState} from 'react';
import TableIdeas from "./TableIdeas";
import {Col, Container, Row} from "react-bootstrap";
import {CSVLink} from "react-csv";
import {useSelector} from "react-redux";

const ManagerIdeas = (props) => {
    const {fetchUpdateIdeas, getAllIdea, page, setPage, fetchIdeas, loading} = props
    const [dataUser, setDataIdeas] = useState()
    const headers = [
        {label: "ID", key: "id"},
        {label: "Author", key: "user"},
        {label: "Content", key: "content"},
        {label: "closeCommentAt", key: "closeCommentAt"},
        {label: "closeIdieaAt", key: "closeIdieaAt"},
        {label: "likes", key: "likes"},
        {label: "active", key: "active"},
        {label: "createdAt", key: "createdAt"},
    ]
    // const callData = async (page) => {
    //     try {
    //         const res = await axiosJWT.get(`http://localhost:3001/idieas/all?order-field=id&orderby=asc&page=${page}`)
    //         setDataIdeas(res.data)
    //     }
    //     catch (err) {console.error(err)}
    // }
    // useEffect(() => {
    //     callData(page)
    //     // console.log("bang")
    // }, [page])
    // console.log("out side useEffect Get all Ideas",getAllIdea)
    const getAllIdeas = useSelector((state) => state.listIdeas.ideas?.allIdeas)
    const csvLinkIdeas = {
        filename: "Ideas.csv",
        headers: headers,
        data: getAllIdeas
    }
    // console.log("check data 2",page)
    return (
        <>
            <title>MANAGER IDEAS</title>
            <Container className={"pb-2"} style={{height: "80vh"}}>
                <Row style={{maxWidth: "99%"}}>
                    <Row className="pb-2">
                        <Col>
                            <CSVLink
                                {...csvLinkIdeas}
                                type="button"
                                className="inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                                download CSV
                            </CSVLink>
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
                        fetchUpdateIdeas={fetchUpdateIdeas}
                        setDataIdeas={setDataIdeas}
                    />
                </Row>
            </Container>
        </>
    )
}
export default ManagerIdeas
