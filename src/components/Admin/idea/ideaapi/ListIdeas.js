import dateFormat from "dateformat";
import ManagerComments from "./comment/ManagerComments";
import {useEffect, useState} from "react";
import ModalEditIdeas from "./ModalEditIdeas";

export const checkLike = (likes) => {
    let like=0
    let dislike = 0
    let totalLike = 0
    try {
        likes.forEach((x) => {
            if (x.positive === true) {
                like++
            } else {
                dislike++
            }
                totalLike = like - dislike
        })
        return totalLike
    } catch (e){
        console.log(e)
    }
}
export const ListIdeas = (props) => {
    const {
        anonymous,
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
        createdAt,
        fetchUpdateIdeas
    } = props
    const [totalLike,setTotalLike] = useState("")
    const [showEditUser,setShowEditUser] = useState(false);
    const dateCreateIdeas =dateFormat(createdAt,"dddd, mmmm dS, yyyy")
    const dateCloseIdieaAt =dateFormat(closeIdieaAt,"dddd, mmmm dS, yyyy")
    useEffect(()=>{
        checkLike(likes)
        setTotalLike(checkLike(likes))
        // console.log(totalLike)
    },[likes])
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
                            {categories?.map((item) => {
                                return (
                                    <td key={item.id}>
                                        {item.categoryName},
                                    </td>
                                )
                            })}
                        </tr>
                        </tbody>
                    </table>
                </td>
                <td>{totalLike}</td>
                <td>{String(active)}</td>
                <td>{dateCreateIdeas}</td>
                <td>{dateCloseIdieaAt}</td>
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
                IdeaId = {id}
                setShow={setShowEditUser}
                show = {showEditUser}
                userIdeas={userIdeas}
                categories={categories}
                closeIdieaAt={closeIdieaAt}
                closeCommentAt={closeCommentAt}
                content={content}
                anonymous={anonymous}
                fetchUpdateIdeas={fetchUpdateIdeas}
            />
        </>
    )
}
export default ListIdeas