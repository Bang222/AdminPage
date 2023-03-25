import {Col, Form, Modal, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from "react";

const ModalDepartment = (props) => {
    const {showDepartment, setShowDepartment,nameDepartment,idDepartment} = props
    const handleClose = () => {
        setShowDepartment(false)
    }
    return (
        <>
            <Modal
                show={showDepartment}
                size="xl"
                backdrop='static'
                className='modal-create-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <span>Department {nameDepartment}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Total Ideas</Form.Label>
                                <Form.Control type="text" value={nameDepartment}
                                              disabled
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Total Users</Form.Label>
                                <Form.Control type="text" value={nameDepartment}
                                              disabled
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Total Comments</Form.Label>
                                <Form.Control type="text" value={nameDepartment}
                                              disabled
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className={"text-red-600 font-bold"}
                        onClick={handleClose}
                    >Close</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalDepartment