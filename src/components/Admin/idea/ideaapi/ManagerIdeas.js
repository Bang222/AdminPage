import './style.css'
import TableIdeas from "./TableIdeas";
import {Col, Container, Row} from "react-bootstrap";
import {CSVLink} from "react-csv";
import {useState} from "react";

const ManagerIdeas = (props) => {
    const {fetchUpdateIdeas, getAllIdea, page, setPage, fetchIdeas,fetchDeleteIdeas} = props
    const headers = [
        {label: "ID", key: "id"},
        {label: "First Name", key: "user.firstName"},
        {label: "Last Name", key: "user.lastName"},
        {label: "Content", key: "content"},
        {label: "CloseCommentAt", key: "closeCommentAt"},
        {label: "CloseIdieaAt", key: "closeIdieaAt"},
        {label: "Likes", key: "likes"},
        {label: "Active", key: "active"},
        {label: "Categories", key: "categoryName"},
        {label: "CreatedAt", key: "createdAt"},
        {label: "Files", key: "documents.length"},
    ]
    // console.log("check data CSV",dataIdeas)
    const csvLinkIdeas = {
        filename: "Ideas.csv",
        headers: headers,
        data: getAllIdea.idieas
    }
    const sumIdeas = getAllIdea.idieas?.map((item) => item.comments.length).reduce((partialSum, a) => partialSum + a, 0)
    console.log("check data",getAllIdea)
    return (
        <>
            <title>MANAGER IDEAS</title>
            <Container className={"pb-2"} style={{height: "80vh"}}>
                <Row className={"ml-[12px] pt-[30px]"} style={{maxWidth: "99%"}}>
                    <Row className="pb-2">
                        <Col>
                            <CSVLink
                                {...csvLinkIdeas}
                                type="button"
                                className="font-bold cursor-pointer bg-blue-200 inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                download CSV
                            </CSVLink>
                        </Col>
                        <Col className={"text-4xl pb-1 flex justify-end items-center"}>
                            <h2>
                                Manager Ideas
                            </h2>
                        </Col>
                    </Row>
                    <Row className={"flex justify-center"}>
                        <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 mb-[30px] mt-[12px]" style={{maxWidth:"75%"}}>
                            <span></span>
                        </Col>
                    </Row>
                    <Row className="h-[80vh]">
                        <Col className="h-full">
                            <TableIdeas
                                getAllIdea={getAllIdea}
                                fetchIdeas={fetchIdeas}
                                setPage={setPage}
                                page={page}
                                fetchUpdateIdeas={fetchUpdateIdeas}
                                fetchDeleteIdeas={fetchDeleteIdeas}
                            />
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}
export default ManagerIdeas
