import ListUsers from "./ListUsers";
import "./custom-style.css"

const TableUsers = (props) => {
    const {fetchUser, getAllUsers, fetchBanUser} = props

    //console.log(getAllUsers)
    return (
        <div className="table-wrapper-scroll-y my-custom-scrollbar" style={{display: "flex"}}>
            <table className={"table table-bordered table-striped mb-0"} id="customers">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">User Name</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">address</th>
                    <th scope="col">departmentId</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Active</th>
                    <th scope="col">Role</th>
                    <th scope="col">Total Ideas</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Band</th>
                </tr>
                </thead>
                {getAllUsers && getAllUsers.map((item) => {
                    return (
                        <tbody key={item.id}>
                        <ListUsers
                            id={item.id}
                            username={item.username}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            address={item.address}
                            departmentId={item.departmentId}
                            email={item.email}
                            phone={item.phone}
                            active={item.active}
                            roles={item.roles}
                            Idiea={item.Idiea}
                            fetchUser={fetchUser}
                            fetchBanUser={fetchBanUser}
                        />
                        </tbody>
                    )
                })
                }
            </table>
        </div>
    )
}
export default TableUsers