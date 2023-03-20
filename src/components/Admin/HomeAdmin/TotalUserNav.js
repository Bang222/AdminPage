import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import './styleChart.css'

const TotalUserNav = (props) => {
    const{getAllUser,handleToggleBar} =props
    const [totalInformation, setTotalInformation] = useState([
        {id:1,name: "User", total:!getAllUser.includes("Ad"), icon: "fa fa-user"},
        {id:2,name: "Ideas", total: getAllUser.length, icon: "fa fa-lightbulb"},
        {id:3,name: "Comment", total: "120", icon: "fa fa-comment"},
        {id:4,name: "Department", total: "120", icon: "fa fa-book"},
        // {name: "Categories", total: "120", icon: "fa fa-book"},
    ])

    return (
        <>
        {totalInformation && totalInformation?.map((item) => {
            return (
                <Col
                    key ={item.id}
                    md={6}
                    sx={12}
                    className={"flex justify-between m-2 max-w-[1366px] mr-[24px] shadow-lg shadow-black-500/50 hover:bg-black hover:ease-in hover:duration-300 hover:text-white bg-gray-500 w-[234px]  max-w-[234px] h-[100px] border-solid border-2 border-white-500 rounded-md items-center cursor-pointer"}>
                    <Row >
                        <Col className={"flex items-center"} md={"3"} style={{fontSize:"24px"}}>
                            <i className={`${item.icon}`}/>
                        </Col>
                        <Col className={"flex grid justify-start font-semibold"} md={"9"}>
                            <p className="p-2">{item.name}</p>
                            <p className="p-2">Total: {item.total}</p>
                        </Col>
                    </Row>
                </Col>
            )
        })}
        </>
    )
}
export default TotalUserNav