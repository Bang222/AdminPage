import {Col, Container, Row} from "react-bootstrap";
import mobile from "../../image/Mobilemobile.png"

const MobileSize = () => {
    return (
        <section className={"h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500"}>
            <Container>
                <Row>
                    <Col className={"flex justify-center items-center"}>
                        <img className={"w-full h-full"} src={mobile} alt="mobile"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default MobileSize