import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import './styleChart.css'

const TotalUserNav = (props) => {
    const {getAllUser, listDepartments,checkDepartment,handleClickDetailDepartment} = props
    const sumIdeas = getAllUser.map((item) => item.Idiea.length).reduce((partialSum, a) => partialSum + a, 0)
    const [totalInformation, setTotalInformation] = useState([
        {id: 1, name: "User", total: getAllUser.length, icon: "fa fa-user"},
        {id: 2, name: "Ideas", total: sumIdeas, icon: "fa fa-lightbulb"},
        {id: 3, name: "Comment", total: "120", icon: "fa fa-comment"},
        {id: 4, name: "Departments", total: listDepartments.length, icon: "fa fa-book"},
    ]);


    console.log("check", getAllUser.map((item) => item.departmentId))
    return (
        <>
            {checkDepartment ?
                <>
                    <Row>
                        <Col className={"flex justify-between"}>
                            {listDepartments?.map((item) => {
                                return (
                                    <>
                                        <Row>
                                            <Col
                                                className={"flex justify-between m-2 max-w-[1366px] mr-[24px] shadow-lg shadow-black-500/50 hover:bg-black hover:ease-in hover:duration-300 hover:text-white bg-gray-500 w-[234px]  max-w-[234px] h-[100px] border-solid border-2 border-white-500 rounded-md items-center cursor-pointer"}>
                                                <p><strong>Department:</strong> {item.defartmentName}</p>
                                                {/*<p>user: {getAllUser.map((user) => user.departmentId.map((id)=>id.id))===item.id ? getAllUser.map((user) => user.departmentId)  :"null"} </p>*/}
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })}
                        </Col>
                    </Row></>
                :
                <>
                    {totalInformation && totalInformation?.map((item) => {
                        return (
                            <Col
                                key={item.id}
                                md={6}
                                sx={12}
                                className={"flex justify-between m-2 max-w-[1366px] mr-[24px] shadow-lg shadow-black-500/50 hover:bg-black hover:ease-in hover:duration-300 hover:text-white bg-gray-500 w-[234px]  max-w-[300px] h-[100px] border-solid border-2 border-white-500 rounded-md items-center cursor-default"}>
                                <Row>
                                    <Col className={"flex items-center"} md={"3"} style={{fontSize: "24px"}}>
                                        <i className={`${item.icon}`}/>
                                    </Col>
                                    <Col className={"flex grid justify-start font-semibold"} md={"9"}>
                                        <p className="p-2">{item.name}</p>
                                        <p className="p-2">Total: {item.total}</p>
                                        {item.name === "Departments" ? <p className="pl-2 cursor-pointer text-red-600"
                                                                          onClick={handleClickDetailDepartment}
                                        >Detail</p> : <></>}
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                </>
            }
        </>
    )
}
export default TotalUserNav