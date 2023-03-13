import {useState} from "react";
import ModelEditUser from "./ModelEditUser";
import {toast} from "react-toastify";

const ListUsers = (props) => {
    const {username, email, phone, id, departmentId,
        firstName, lastName, address, active, roles,fetchUser,fetchBanUser,Idiea} = props
    const [ShowEditUser, setShowEditUser] = useState(false)

    const handleActive =  (e) => {
        e.preventDefault()
         fetchBanUser(id)
         fetchUser()
        toast.warn("Ban User Success!")
    }
    return (
        <>
            {!roles.includes("Adminstrator") ?
                <tr>
                    <td>{id}</td>
                    <td>{username}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{address}</td>
                    <td>{departmentId}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{String(active)}</td>
                    <td>{roles}</td>
                    <td>{Idiea.length}</td>
                    <td>
                        <button type="button" style={{color:"blue",fontWeight:"900"}}
                                onClick={() => setShowEditUser(true)}
                        >Edit
                        </button>
                    </td>
                    <td>
                        <button style={{color:"red",fontWeight:"900"}}
                                onClick={(e) => handleActive(e)}
                        >{active? "Ban" :"Active"}
                        </button>
                    </td>
                </tr> : <></>}
            <ModelEditUser
                key={id}
                show={ShowEditUser}
                setShow={setShowEditUser}
                userId={id}
                fetchUser={fetchUser}
                roles={roles}
            />
        </>
    )
}
export default ListUsers