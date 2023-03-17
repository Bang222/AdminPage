import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

const HomepageAdmin = () => {

    const [check, setCheck] = useState([
        {name: "User", total: "120", icon: "fa fa-user"},
        {name: "Ideas", total: "120", icon: "fa fa-lightbulb"},
        {name: "Comment", total: "120", icon: "fa fa-comment"},
        {name: "Department", total: "120", icon: "fa fa-book"},
        // {name: "Categories", total: "120", icon: "fa fa-book"},
    ])
    return (
        <>
            <section style={{transition: "width .9s ease-in"}}>
                <Container>
                    <Row className={"pt-[24px] m-[1px] pb-[30px]"}>
                        <Row className={"flex justify-between font-bold"}>
                            <Col className={"text-4xl"}><h2> Dash Board ADMIN</h2></Col>
                            <Col className={"text-right font-bold"}>
                        <span
                            className="font-bold cursor-pointer bg-blue-200 inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                         DownLoad Zip
                    </span>
                            </Col>
                        </Row>
                    </Row>
                    <Row className={"flex justify-center"}>
                        <Col className="h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500" style={{maxWidth:"75%"}}>
                            <span></span>
                        </Col>
                    </Row>
                    <Row className={"pt-5 mr-[30px] ml-[36px]"}>
                        <Col >
                            <Row className={"md:flex md:justify-center" } >
                            {check && check.map((item, index) => {
                                return (
                                    <Col key = {index}
                                         md={6}
                                         sx={12}
                                        className={"flex justify-between m-2 max-w-[1366px] mr-[24px] shadow-lg shadow-black-500/50 hover:bg-black hover:ease-in hover:duration-300 hover:text-white bg-gray-500 w-[234px]  max-w-[234px] h-[100px] border-solid border-2 border-white-500 rounded-md items-center cursor-pointer"}>
                                        <Row >
                                            <Col className={"flex items-center"} md={"3"} style={{fontSize:"24px"}}>
                                                <i className={`${item.icon}`}/>
                                            </Col>
                                            <Col className={"flex grid justify-start font-semibold"} md={"9"}>
                                                <p className="p-2">{item.name}</p>
                                                <p  className="p-2">Total: {item.total}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default HomepageAdmin