import {useState} from "react";
import {Col, Row} from "react-bootstrap";

const ManagerNav = (props) => {
    const {listAllCategories} = props
    const [nav, setNav] = useState([
        {id:1,name: "Categories", total:listAllCategories.length , icon: "fa fa-user"},
        {id:2,name: "Ideas", total: "120", icon: "fa fa-lightbulb"},
    ])
    return (
        <>
            {nav.map((item, index) => {
                return (
                    <Col
                        key ={item.id}
                        md={6}
                        sx={12}
                        className={"flex justify-around m-2 max-w-[1366px] mr-[24px] shadow-lg shadow-black-500/50 hover:bg-black hover:ease-in hover:duration-300 hover:text-white bg-gray-500 w-[300px]  max-w-[300px] h-[100px] border-solid border-2 border-white-500 rounded-md items-center cursor-pointer"}>
                        <Row >
                            <Col className={"flex items-center pl-[24px]"} md={"4"} style={{fontSize:"24px"}}>
                                <i className={`${item.icon}`}/>
                            </Col>
                            <Col className={"flex grid justify-start font-semibold"} md={"8"}>
                                <p className="p-2">{item.name}</p>
                                <p className="p-2 w-[155%]">Total: {item.total}</p>
                            </Col>
                        </Row>
                    </Col>
                )
            })}
        </>
    )
}
export default ManagerNav