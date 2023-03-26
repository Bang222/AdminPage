import dateFormat from "dateformat";
import ManagerComments from "./comment/ManagerComments";
import {useEffect, useState} from "react";
import ModalEditIdeas from "./ModalEditIdeas";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

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
        documents,
        fetchUpdateIdeas,fetchDeleteIdeas
    } = props
    const err = useSelector((state) => state.listIdeas.ideas?.isFetching)
    const [totalLike,setTotalLike] = useState("")
    const [showEditUser,setShowEditUser] = useState(false);
    const dateCreateIdeas =dateFormat(createdAt,"dddd, mmmm dS, yyyy")
    const dateCloseIdieaAt =dateFormat(closeIdieaAt,"dddd, mmmm dS, yyyy")
    useEffect(()=>{
        checkLike(likes)
        setTotalLike(checkLike(likes))
        // console.log(totalLike)
    },[likes])
    const handleDelete = async (id) => {
        const deleteIdeas = {
            idieaId : id
        }

        if(!err) {
            await fetchDeleteIdeas(deleteIdeas)
            await fetchIdeas(page)
            toast.success("Successfully deleted")
        }
        else toast.error("Error deleting")
    }
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
                <td>{documents.length}</td>
                <td>
                    <button type="button" style={{color: "blue", fontWeight: "900"}}
                        onClick={() => setShowEditUser(true)}
                    >Edit
                    </button>
                </td>
                <td>
                    <button type="button" className="text-red-600 font-bold"
                            onClick={()=>handleDelete(id)}
                    >Delete
                    </button>
                </td>
            </tr>
            <ModalEditIdeas
                key={id}
                IdeaId = {id}
                page={page}
                setShow={setShowEditUser}
                show = {showEditUser}
                userIdeas={userIdeas}
                categories={categories}
                closeIdieaAt={closeIdieaAt}
                closeCommentAt={closeCommentAt}
                content={content}
                anonymous={anonymous}
                fetchIdeas={fetchIdeas}
                fetchUpdateIdeas={fetchUpdateIdeas}
                documents={documents}
            />
        </>
    )
}
export default ListIdeas