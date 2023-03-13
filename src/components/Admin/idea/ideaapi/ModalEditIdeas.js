import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Col, Form, Row} from "react-bootstrap";
import {toast} from "react-toastify";
import dateFormat, {masks} from "dateformat";
import _ from "lodash"
import {useSelector} from "react-redux";


const ModalEditIdeas = (props) => {
    const {
        IdeaId,
        show,
        setShow,
        content,
        closeCommentAt,
        closeIdieaAt,
        fetchUpdateIdeas,
        userIdeas,
        categories,
        anonymous,
    } = props
    const err = useSelector((state) => state.listIdeas.updateIdeas?.error)
    const pending = useSelector((state) => state.listIdeas.updateIdeas?.isFetching)
    // const [dataIdeas,setDataIdeas] = useState([]);
    const [inputContent, setInputContent] = useState(`${content}`)
    const [inputCloseCommentAt, setInputCloseCommentAt] = useState("")
    const [inputCloseIdieaAt, setInputCloseIdieaAt] = useState("")
    const [InputAnonymous, setInputAnonymous] = useState(anonymous)
    const [category, setCategory] = useState(categories)
    const [file, setFile] = useState([{}])
    const [previewFile, setPreviewFile] = useState('')
    // console.log("inputContent",inputContent)
    // console.log("inputCloseCommentAt",inputCloseCommentAt)
    // console.log("inputCloseIdieaAt",inputCloseIdieaAt)
    // console.log("category",category)
    // console.log("IdeaId",IdeaId)
    // console.log("file",file)

    const dateCloseComment = dateFormat(inputCloseCommentAt, "dddd, mmmm dS, yyyy")
    const dateCloseIdeas = dateFormat(inputCloseIdieaAt, "dddd, mmmm dS, yyyy")
    const fullName = `${userIdeas.firstName} ${userIdeas.lastName}`

    // useEffect(()=>{
    //     const checkCategory = () => {
    //         categories.forEach((x)=>{
    //             console.log('check',x.id)
    //         })
    //     }
    //     checkCategory()
    // },[])

    const handleClose = () => {
        setShow(!show)
    }
    const handleSubmit = (e) => {
        if (_.isEmpty(inputContent)) {
            toast.warn("Content is empty")
        }
        const data = {
            idieaId: IdeaId,
            content: inputContent,
            // idCategory: category,
            anonymous: InputAnonymous,
            closeIdieaAt: closeIdieaAt,
            closeCommentAt: closeCommentAt
        }
        fetchUpdateIdeas(data,file)
    }
    console.log("check file", file)
    const handleUploadFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewFile(URL.createObjectURL(event.target.files[0]))
            setFile(event.target.files[0])
        }
    }

    // console.log("check",dataIdeas)
    // console.log(inputcloseCommentAt.getFullYear() + "/" + (inputcloseCommentAt.getMonth() + 1) + "/" + inputcloseCommentAt.getDate())
    return (
        <Modal show={show}
               size="xl"
               backdrop='static'
               className='modal-create-user'>

            <Modal.Header>
                <Modal.Title> Edit </Modal.Title>
                <button style={{fontSize: "30px", fontWeight: "500"}} onClick={handleClose}>X</button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" value={IdeaId}
                                          disabled
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" value={fullName}
                                          disabled
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Total Categories</Form.Label>
                            <Form.Control type="text" value={categories.length}
                                          disabled
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Date Ideas Close</Form.Label>
                            <Form.Control type="text"
                                          value={dateCloseIdeas}
                                          disabled
                                          onChange={(event) => setInputCloseIdieaAt(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Date Comment Close</Form.Label>
                            <Form.Control type="text" value={dateCloseComment}
                                          disabled
                                          onChange={(event) => setInputCloseCommentAt(event.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Content</Form.Label>
                            <Form.Control type="text" value={inputContent}
                                          onChange={(event) => setInputContent(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Anonymous</Form.Label>
                            <Form.Select onChange={(event) => setInputAnonymous(event.target.value)}>
                                <option value={String(anonymous)}>{String(anonymous)}</option>
                                <option value={String(!anonymous)}>{String(!anonymous)}</option>
                            </Form.Select>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Row className="pt-2 pb-2">
                                    <label className="form-label m-[8px]" htmlFor='labelUpload'
                                    > <i className="fas fa-file-upload"/> Upload file</label>
                                    <input type='file' hidden id='labelUpload'
                                           onChange={handleUploadFile}
                                    />
                                </Row>
                                <Row className="border-dotted border-2 border-indigo-600 m-2">
                                    <Col className={"p-2"}>
                                        {previewFile ?
                                            <Row>
                                                <p className={"p-2"}><strong>File Name</strong>: {file.name}</p>
                                                <p className={"p-2"}><strong>File Type</strong>: {file.type}</p>
                                                <p className={"p-2"}><strong>File Size </strong>: {file.size} byte</p>
                                            </Row>
                                            :
                                            <span
                                                className={"text-lg h-[150px] flex justify-center items-center font-bold"}> Preview File</span>
                                        }
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Row>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" onClick={() => handleSubmit()}>
                    {pending ? "Loading..." : "Save Changes"}
                </button>
                <p>{err ? "ERROR" : ""}</p>
                <button className="btn btn-danger" onClick={handleClose}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalEditIdeas