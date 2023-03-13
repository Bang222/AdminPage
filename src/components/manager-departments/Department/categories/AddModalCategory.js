import {Col, Container, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {toast} from "react-toastify";
import _ from "lodash";
import {useSelector} from "react-redux";
import "../loaderManager.css"

const AddModalCategory = (props) => {
    const {show, setShow, fetchListCategories, fetchAddCategory} = props
    const error = useSelector((state) => state.departments.addCategory?.error)
    const loading = useSelector((state) => state.departments.addCategory?.isFetching)

    const [categoryName, setCategoryName] = useState("")
    const [description, setDescription] = useState("")
    const handleClose = () => setShow(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (_.isEmpty(description) && _.isEmpty(categoryName)) return toast.error("You need input infomation")
        if (_.isEmpty(categoryName)) return toast.error("Can not empty category name")
        if (_.isEmpty(description)) return toast.error("Can not empty description")
        const newCategory = {
            categoryName: categoryName,
            description: description
        }
         fetchAddCategory(newCategory)
        handleClose(toast.success("Add Success"))
         fetchListCategories()
    }
    return (
        <Modal
            show={show}
            size="xl"
            backdrop='static'
            className='modal-create-user'
        >
            <Modal.Header>
                <Modal.Title> Create Category </Modal.Title>
                <button style={{fontSize: "30px", fontWeight: "500"}} onClick={handleClose}>X</button>
            </Modal.Header>
            {loading ? <Container><span className="loader-manager"></span> </Container> :
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control type="text" value={categoryName}
                                              onChange={(event) => setCategoryName(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={description}
                                              onChange={(event) => setDescription(event.target.value)}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
            }
            <Modal.Footer>
                <button className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                > Create
                </button>
                <button className="btn btn-danger" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}
export default AddModalCategory