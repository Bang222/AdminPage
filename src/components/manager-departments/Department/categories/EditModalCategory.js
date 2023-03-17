import {Col, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {toast} from "react-toastify";
import _ from "lodash";
import {useSelector} from "react-redux";
import {Category} from "@mui/icons-material";

const EditModalCategory = (props) => {
    const {fetchUpdateCategory,showUpdate, setShowUpdate, fetchListCategories,categoryName,description,categoryId} = props
    const error = useSelector((state) => state.departments.updateCategory?.error)
    const loading = useSelector((state) => state.departments.updateCategory?.isFetching)
    const [UpdateCategory,setUpdateCategory] =useState(`${categoryName}`)
    const [UpdateDescription,setUpdateDescription] =useState(`${description}`)

    const handleCloseEdit = () => setShowUpdate(false)

    const handleSubmit = async  (e) => {
        e.preventDefault()
        if (_.isEmpty(UpdateCategory) && _.isEmpty(UpdateDescription)) return toast.error("You need input infomation")
        if (_.isEmpty(UpdateCategory)) return toast.error("Can not empty category name")
        if (_.isEmpty(UpdateDescription)) return toast.error("Can not empty description")
        const updateCategory = {
            id: categoryId,
            categoryName: UpdateCategory,
            description: UpdateDescription
        }
        await fetchUpdateCategory(updateCategory)
        await fetchListCategories()
        if(!loading) {handleCloseEdit(toast.success("Update Success"))}
    }
    return (
        <Modal
            show={showUpdate}
            size="xl"
            backdrop='static'
            className='modal-create-user'
        >
            <Modal.Header>
                <Modal.Title> Update Category </Modal.Title>
                <button style={{fontSize: "30px", fontWeight: "500"}} onClick={handleCloseEdit}>X</button>
            </Modal.Header>
            <Modal.Body>
                {loading ? <div className="flex justify-center pt-4"><span className="loader-manager"></span></div> :
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} sm={6} controlId="formGridCity">
                                <Form.Label>Category ID</Form.Label>
                                <Form.Control type="text" defaultValue={categoryId}
                                              disabled
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control type="text" defaultValue={categoryName}
                                              onChange={(event) => setUpdateCategory(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" defaultValue={description}
                                              onChange={(event) => setUpdateDescription(event.target.value)}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                }
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                > Update
                </button>
                <button className="btn btn-danger" onClick={handleCloseEdit}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditModalCategory