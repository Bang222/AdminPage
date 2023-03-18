import {Col, Container, Row} from "react-bootstrap";
import mobile from "../../image/Mobilemobile.png"

const MobileSize = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col className={"flex justify-center items-center"}>
                        <img src={mobile} alt="mobile"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default MobileSize