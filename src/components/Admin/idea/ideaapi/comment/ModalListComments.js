import {Col, Form, Modal, Row} from "react-bootstrap";
import ModalComments from "./TableComments";

const ModalListComments = (props) => {
    const {show,setShow,comments,ideaId,fetchIdeas,page} = props
    const handleClose = () =>{ return setShow(false)}
    return (
        <>
            <Modal
                show={show}
                size="xl"
                backdrop='static'
                className='modal-create-user'>
                <Modal.Title className={"flex justify-between pl-4 pr-4 pt-3"}>
                    <span>Comment</span>
                    <span className="loader-bear"></span>
                <button className={"h-fit"}> <span style={{fontSize: "30px", fontWeight: "500"}} onClick={handleClose}>X </span></button>
                </Modal.Title>
                <Modal.Body>
                    <ModalComments
                        key={ideaId}
                        comments={comments}
                        ideaId={ideaId}
                        fetchIdeas={fetchIdeas}
                        page={page}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalListComments