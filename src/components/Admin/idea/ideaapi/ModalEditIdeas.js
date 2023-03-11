import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Form, Row} from "react-bootstrap";


const ModalEditIdeas = (props) => {
    const {show,setShow,content,closeCommentAt,closeIdieaAt,createdAt} = props
    const [inputContent,setInputContent] = useState("")
    const [inputcloseCommentAt,setInputcloseCommentAt] = useState("")
    const [inputcloseIdieaAt,setInputcloseIdieaAt] = useState("")
    const handleClose = () => {
        setShow(!show)
    }
    return(
        <Modal show={show}
               size="xl"
               backdrop='static'
               className='modal-create-user'>

            <Modal.Header closeButton>
                <Modal.Title>Ideas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" value={content}
                                          onChange={(event)=> setInputContent(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Date Ideas Close</Form.Label>
                            <Form.Control type="date" value={closeIdieaAt}
                                          disabled
                                          onChange={(event)=> setInputcloseCommentAt(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Date Comment Close</Form.Label>
                            <Form.Control type="date" value={inputcloseCommentAt}
                                          disabled
                                          onChange={(event)=> setInputcloseIdieaAt(event.target.value)}
                            />
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalEditIdeas