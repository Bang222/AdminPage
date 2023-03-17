import ListUsers from "./ListUsers";

const TableUsers = (props) => {
    const {fetchUser, getAllUsers, fetchBanUser} = props

    // console.log(getAllUsers)
    return (
        <div className="table-user" style={{display: "flex"}}>
            <table id="customers">
                <thead>
                <tr>
                    <th>id</th>
                    <th>User Name</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>address</th>
                    <th>departmentId</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Role</th>
                    <th>Total Ideas</th>
                    <th>Edit</th>
                    <th>Band</th>
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