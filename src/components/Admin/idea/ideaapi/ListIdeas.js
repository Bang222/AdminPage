import dateFormat from "dateformat";
import ManagerComments from "./comment/ManagerComments";
import {useEffect, useState} from "react";
import ModalEditIdeas from "./ModalEditIdeas";

export const ListIdeas = (props) => {
    const [totalLike,setTotalLike] = useState(0)
    const [showEditUser,setShowEditUser] = useState(false);
    const {
        active,
        comments,
        page,
        closeIdieaAt,
        categories,
        id,
        content,
        likes,
        closeCommentAt,
        userIdeas,
        handlePageClick,
        fetchIdeas,
        createdAt
    } = props
// console.log("check show",showEditUser)
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{userIdeas.firstName} {userIdeas.lastName}</td>
                <td>{content}</td>
                <td style={{textAlign: "center"}}>
                    <ManagerComments
                        comments={comments}
                        fetchIdeas={fetchIdeas}
                        ideaId={id}
                        handlePageClick={handlePageClick}
                        page={page}
                    />
                </td>
                <td>
                    <table>
                        <tbody>
                        <tr>
                            {categories?.map((item, index) => {
                                return (
                                    <td key={`table index ${index}`}>
                                        {item.categoryName}
                                    </td>
                                )
                            })}
                        </tr>
                        </tbody>
                    </table>
                </td>
                <td>{totalLike}</td>
                <td>{String(active)}</td>
                <td>{createdAt}</td>
                <td>{closeIdieaAt}</td>
                <td>
                    <button type="button" style={{color: "blue", fontWeight: "900"}}
                        onClick={() => setShowEditUser(true)}
                    >Edit
                    </button>
                </td>
                <td>
                    <button type="button" className="text-red-600 font-bold"
                    >Delete
                    </button>
                </td>
            </tr>
            <ModalEditIdeas
                key={id}
                setShow={setShowEditUser}
                show = {showEditUser}
                closeIdieaAt={closeIdieaAt}
                closeCommentAt={closeCommentAt}
                createdAt={createdAt}
                content={content}
            />
        </>
    )
}
export default ListIdeas