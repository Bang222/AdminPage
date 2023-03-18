import {Col, Container, Row} from "react-bootstrap";
import TableUsers from "./TableUsers";
import React from "react";
import {CSVLink} from "react-csv";

const ManagerData = (props) => {
    const {getAllUser,fetchUser,fetchBanUser} = props
    const headers = [
        {label: "ID", key: "id"},
        {label: "User Name", key: "username"},
        {label: "First Name", key: "firstName"},
        {label: "Last Name", key: "lastName"},
        {label: "Email", key: "email"},
        {label: "dateOfBirth", key: "dateOfBirth"},
        {label: "phone", key: "phone"},
        {label: "roles", key:"roles"},
    ]

    const csvLinkIdeas = {
        filename: "users.csv",
        headers: headers,
        data: getAllUser
    }
    // console.log(getAllUser)
    return(
        <section className='flex' style={{display: "flex"}}>
            <Container className="">
                <Row className="flex justify-between" style={{fontWeight: "500"}}>
                    <Col className={"p-[24px]"}>
                        <p className={"text-4xl"}>
                            Manager User
                        </p>
                    </Col>
                    <Col className={"p-[24px] flex justify-end"}>
                        <CSVLink
                            {...csvLinkIdeas}
                            type="button"
                            className="font-bold cursor-pointer bg-blue-200 inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                            download CSV
                        </CSVLink>
                    </Col>
                    <Row className={"flex justify-center"}>
                        <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 mb-[30px] mt-[12px]" style={{maxWidth:"75%"}}>
                            <span></span>
                        </Col>
                    </Row>
                </Row>
                <TableUsers
                    getAllUsers={getAllUser}
                    fetchUser={fetchUser}
                    fetchBanUser={fetchBanUser}
                />
            </Container>
        </section>
    )
}
export default ManagerData