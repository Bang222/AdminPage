import ListIdeas from "./ListIdeas";
import React, {useState} from "react";
import ReactPaginate from "react-paginate";
import {Col, Row} from "react-bootstrap";

const TableIdeas = (props) => {
    const {fetchUpdateIdeas, fetchIdeas, getAllIdea, setPage, page,fetchDeleteIdeas} = props
    const handlePageChange = (event) => {
        fetchIdeas(+event.selected + 1)
        setPage(+event.selected + 1)
    };
    return (
        <>
            <Row className={" h-5/6 overflow-scroll"}>
                <Col>
                    <table className="table table-striped text-sm flex items-center" style={{border: "solid 1px #ccc"}}>
                        <thead className="text-white bg-slate-900">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Author</th>
                            <th scope="col">Content</th>
                            <th scope="col">Comments</th>
                            <th scope="col">Categories</th>
                            <th scope="col">like</th>
                            <th scope="col">Active</th>
                            <th scope="col">CreateIdeas</th>
                            <th scope="col">CloseIdieaAt</th>
                            <th scope="col">File</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        {getAllIdea.idieas?.length > 0 && getAllIdea.idieas.map((item) => {
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
                                    anonymous={item.anonymous}
                                    documents={item.documents}
                                    fetchIdeas={fetchIdeas}
                                    handlePageClick={handlePageChange}
                                    fetchUpdateIdeas={fetchUpdateIdeas}
                                    fetchDeleteIdeas={fetchDeleteIdeas}
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
                </Col>
            </Row>
            <div className={"flex justify-center"}><strong>Table:</strong>Manager Ideas</div>
            <div className="paginate flex justify-center p-1">
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
                    pageCount={getAllIdea.pages}
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
