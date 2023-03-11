import {useEffect, useState} from "react";
import ModalListComments from "./ModalListComments";
import "./loading.css"

const ManagerComments = (props) => {
    const {comments,fetchIdeas,ideaId,page} = props
    const [showComments, setShowComments] = useState(false)
    return (
        <>
            {comments && comments.length > 0 &&
                <button type="button" style={{color: "Blue", fontWeight: "500"}}
                        onClick={() => setShowComments(true)}
                >Comment Detail {comments.length}
                </button>
            }
            {comments && comments.length === 0 &&
                <p>Empty</p>
            }
            <ModalListComments
                key={ideaId}
                ideaId={ideaId}
                comments={comments}
                fetchIdeas={fetchIdeas}
                show={showComments}
                setShow={setShowComments}
                page={page}
            />
        </>
    )
}
export default ManagerComments