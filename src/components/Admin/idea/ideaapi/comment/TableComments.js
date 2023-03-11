
import ListComments from "./listComments";

const TableComments = (props) => {
    const {comments,ideaId,fetchIdeas,page} = props;

    return (
        <table className="min-w-full text-center text-sm font-light">
            <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
                <th className="px-6 py-2">Author</th>
                <th className="px-6 py-2">Content</th>
                <th className="px-6 py-2">Create At</th>
                <th className="px-6 py-2">Anonymous</th>
                <th className="px-6 py-2 ">Edit</th>
                <th className="px-6 py-2 ">Delete</th>
            </tr>
            </thead>
            {comments.map((item) => {
                return (
                    <tbody key={item.id}>
                        <ListComments
                            commentId = {item.id}
                            contentCmt = {item.content}
                            createdAtCmt = {item.createdAt}
                            anonymousCmt = {item.anonymous}
                            userComment={item.user}
                            fetchIdeas={fetchIdeas}
                            ideaId={ideaId}
                            page={page}
                        />
                    </tbody>
                )
            })}
        </table>
    )
}
export default TableComments;