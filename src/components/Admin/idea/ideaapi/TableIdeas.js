import ListIdeas from "./ListIdeas";
import React, {useState} from "react";
import ReactPaginate from "react-paginate";

const TableIdeas = (props) => {
    const {fetchIdeas, getAllIdea,setPage,page} = props
    const handlePageChange = (event) => {
        fetchIdeas(+event.selected + 1)
        setPage(+event.selected + 1)
    };
    return (
        <>
                <table className="table table-striped text-sm" style={{border: "solid 1px #ccc"}}>
                    <thead className="text-white bg-slate-900">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Author</th>
                        <th scope="col">Content</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Categories</th>
                        <th scope="col">like</th>
                        <th scope="col">Active</th>
                        <th scope="col">closeCommentAt</th>
                        <th scope="col">closeIdieaAt</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    {getAllIdea && getAllIdea.length > 0 && getAllIdea.map((item) => {
                        return (
                            <tbody key={item.id} className={"text-xs"}>
                                <ListIdeas
                                    id={item.id}
                                    userIdeas={item.user}
                                    content={item.content}
                                    categories={item.categories}
                                    closeCommentAt={item.closeCommentAt}
                                    closeIdieaAt={item.closeIdieaAt}
                                    comments={item.comments}
                                    likes={item.likes}
                                    active={item.active}
                                    createdAt={item.createdAt}
                                    fetchIdeas={fetchIdeas}
                                    handlePageClick={handlePageChange}
                                    page={page}
                                />
                            </tbody>
                        )
                    })
                    }
                    {
                        getAllIdea && getAllIdea.length === 0 &&
                        <tbody>
                        <tr>
                            <td style={{color: 'Red', textAlign: "center", fontWeight: "900", fontSize: "24"}}
                                colSpan={'10'}>Data Empty
                            </td>
                        </tr>
                        </tbody>
                    }
                </table>
            <div className="paginate flex justify-center p-1" >
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={5}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </>
    )
}
export default TableIdeas