import {Col} from "react-bootstrap";
import JSZip from "jszip";
import React, {useEffect, useState} from "react";
import {CSVLink} from "react-csv";
import {CSVDownload} from "react-csv";


const Data = (props) => {
    const {getAllUser} = props
    const [dataCSV, setDataCSV] = useState()
    const headers = [
        {label: "ID", key: "id"},
        {label: "User Name", key: "username"},
        {label: "First Name", key: "firstName"},
        {label: "Last Name", key: "lastName"},
        {label: "Email", key: "email"},
        {label: "dateOfBirth", key: "dateOfBirth"},
        {label: "phone", key: "phone"},
        {label: "roles", key: "roles"},
    ]

    const csvLinkIdeas = {
        filename: "test1.csv",
        headers: headers,
        data: getAllUser
    }
    const csvLinkIdea2 = {
        filename: "test.csv",
        headers: headers,
        data: getAllUser
    }
    // const downloadAllData = async () => {
    //     const zip = new JSZip();
    //     const data = await getAllUser.blob()
    //     zip.file(`${getAllUser.id}`, data)
    //     return data
    // }
    // const handleDownload =()  => {
    //     const check = <CSVLink data={getAllUser}>bang</CSVLink>
    //     return check.props
    // }
    // console.log("check data",[csvLinkIdeas,csvLinkIdea2])
    return (
        <>
            <Col className={"text-4xl "}><h2> Dash Board Management</h2></Col>
            <Col>
                <CSVLink  {...csvLinkIdeas}
                          type="button"
                          className={"data-csv-user"}
                >
                    Download
                </CSVLink>
                <CSVLink
                    {...csvLinkIdea2}
                    type="button"
                    className={"data-csv-user"}
                >
                </CSVLink>
            </Col>
        </>
    )
}
export default Data