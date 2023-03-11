import {Modal} from "react-bootstrap";
import {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editUser, getAllUsers} from "../../../../redux/Apirequest";
import {toast} from "react-toastify";
import {createAxios} from '../../../../createInstance'
import {loginSuccess} from "../../../../redux/authSlice";

export const ModelEditUser = (props) => {
    const {show, setShow, userId,fetchUser} = props
    const user = useSelector((state) => state.auth.login?.currentUser)
    const pending = useSelector((state) => state.listUsers.users?.pending)
    const err = useSelector((state) => state.listUsers.users?.errors)
    const dispatch = useDispatch()

    let axiosJWT = createAxios(user,dispatch,loginSuccess)
    const [role, setRoles] = useState("")
    const handleClose = () => setShow(false);

    const handleSubmit = async (e) => {
        if(!role) return toast.error("Please choose a role")
        const roles = [role]
        await editUser(user?.accessToken, dispatch, roles,userId,axiosJWT)
        toast.success("update success")
        handleClose( await fetchUser())
    }
    return (
        <Modal
            show={show}
            size="xl"
            backdrop='static'
            className='modal-create-user'
        >
            <Modal.Header>
                <Modal.Title> Edit </Modal.Title>
                <button style={{fontSize: "30px", fontWeight: "500"}} onClick={handleClose}>X</button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Role</Form.Label>
                            <Form.Select onChange={(event) => setRoles(event.target.value)}>
                                <option value=''>Choose</option>
                                <option value='Staff'>Staff</option>
                                <option value='Quality Assurance Manager'>Quality Assurance Manager</option>
                                <option value='QA Coordinator'>QA Coordinator</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>User ID</Form.Label>
                            <Form.Control value={userId}
                            disabled
                            />
                        </Form.Group>
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
export default ModelEditUser