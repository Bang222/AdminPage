import dateFormat from "dateformat";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../../../../createInstance";
import {loginSuccess} from "../../../../../redux/authSlice";
import {deleteComment, editComment} from "../../../../../redux/Apirequest";
import {toast} from "react-toastify";
import _ from "lodash"
// prop from table Comments
const ListComments = (props) => {
    const {anonymousCmt, createdAtCmt, contentCmt, commentId, userComment, ideaId, fetchIdeas, page} = props
    const [edit, setEdit] = useState(true);
    const [anonymous, setAnonymous] = useState("");
    const [content, setContent] = useState(`${contentCmt}`);
    const isFetching = useSelector((state) => state.listIdeas.comment?.isFetching)
    const deleteMsg = useSelector((state) => state.listIdeas.comment?.msg)
    const deleteErr = useSelector((state) => state.listIdeas.comment?.error)
    const err = useSelector((state) => state.listIdeas.comment?.error)


    const user = useSelector((state) => state.auth.login?.currentUser)

    const dispatch = useDispatch()
    let axiosJWT = createAxios(user, dispatch, loginSuccess)
    const handleOnOff = () => {
        if (!_.isEmpty(content)) {
            setEdit(!edit)
            toast.success("Update Success")
        } else toast.error("Content Can not empty")
    }
    const fetchDelete = (e) => {
         deleteComment(axiosJWT, dispatch, user?.accessToken, e)
    }
    const handleDelete = async (e) => {
        if (!deleteErr) {
             await fetchDelete(e)
             await fetchIdeas(page)
            toast.success("Comment Deleted Successfully")
        } else toast.error("Err")
    }
    const handleSubmit = async (e) => {
        const updateComment = {
            anonymous: anonymousCmt,
            content: content,
            idieaId: ideaId
        }
        await editComment(user?.accessToken, dispatch, axiosJWT, updateComment, e);
        if (err === false) {
            handleOnOff(await fetchIdeas(page))
        } else toast.error("Can not update")
    }
    return (
        <>
            {edit ?
                <tr className="border-b dark:border-neutral-500" key={commentId}>
                    <td className="whitespace-nowrap px-6 py-2">{userComment.firstName} {userComment.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-2"
                    >{contentCmt}</td>
                    <td className="whitespace-nowrap px-6 py-2">
                        {dateFormat(createdAtCmt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                        <option value={String(anonymousCmt)}>{String(anonymousCmt)}</option>
                    </td>
                    <td className="px-6 py-2 text-blue-700 font-bold cursor-pointer "
                        onClick={() => setEdit(!edit)}
                    >Edit
                    </td>
                    <td className="px-6 py-2 text-red-700 font-bold cursor-pointer"
                        onClick={() => handleDelete(commentId)}
                    >Delete
                    </td>
                </tr>
                :
                <tr className="border-b dark:border-neutral-500" key={commentId}>
                    <td className="whitespace-nowrap px-6 py-2">{userComment.firstName} {userComment.lastName}</td>
                    <td className="whitespace-nowrap px-6 py-2">
                        <span className={"border-2 text-black-700 font-bold"}>
                        <input defaultValue={contentCmt} className="text-red-700" style={{color: "black"}}
                               onChange={(e) => setContent(e.target.value)}/>
                        </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                        {dateFormat(createdAtCmt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                    </td>
                    <td className="whitespace-nowrap px-6 py-2">
                        <option value={String(anonymousCmt)}>{String(anonymousCmt)}</option>
                    </td>
                    <td className="px-6 py-2 text-yellow-700 font-bold cursor-pointer"
                        onClick={() => handleSubmit(commentId)}
                    >save
                    </td>
                    <td className="px-6 py-2 text-red-700 font-bold cursor-pointer"
                        onClick={() => handleDelete(commentId)}
                    > Delete
                    </td>
                </tr>
            }
        </>
    )
}
export default ListComments