import ListCategories from "./ListCategories";
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import AddModalCategory from "./AddModalCategory";
import {CSVLink} from "react-csv";
import {useSelector} from "react-redux";
import "./loading.css"

const Categories = (props) => {
    const {listAllCategories, fetchListCategories, fetchAddCategory, fetchDeleteCategory, fetchUpdateCategory} = props
    const [modalAddCategory, setModalAddCategory] = useState(false)
    const loading = useSelector((state) => state.departments.department?.isFetching)
    const headers = [
        {label: "ID", key: "id"},
        {label: "category Name", key: "categoryName"},
        {label: "description", key: "description"},
        {label: "active", key: "active"}
    ]
    const csvLink = {
        filename: "Categories.csv",
        headers: headers,
        data: listAllCategories
    }
    // console.log("loading", loading)
    return (
        <> {loading ? <span className="loader"></span> :
            <>
                <Container className={"h-auto"}>
                    <Row className="w-full h-3">
                        <Row className={"p-4"}>
                            <Col>
                                <CSVLink
                                    {...csvLink}
                                    type="button"
                                    className="inline-block rounded-full border-2 border-info px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                >
                                    Export Data CSV
                                </CSVLink>
                            </Col>
                            <Col className="text-left text-2xl font-bold">
                                <h2> Manager Categories </h2>
                            </Col>
                            <Col className="text-right pr-6">
                            <span className={"btn btn-primary"}
                                  onClick={() => setModalAddCategory(true)}
                            > ADD Category
                            </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="overflow-scroll" style={{height: "80vh"}}>
                                <table className="table table-striped" style={{border: "solid 1px #ccc"}}>
                                    <thead className="bg-stone-800 text-slate-50">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Categories</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                    </thead>
                                    {listAllCategories?.map((item) => {
                                        return (
                                            <tbody className="text-xs" key={item.id}>
                                            <ListCategories
                                                categoryId={item.id}
                                                categoryName={item.categoryName}
                                                description={item.description}
                                                fetchDeleteCategory={fetchDeleteCategory}
                                                fetchListCategories={fetchListCategories}
                                                fetchUpdateCategory={fetchUpdateCategory}
                                            />
                                            </tbody>
                                        )
                                    })}
                                </table>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                <AddModalCategory
                    show={modalAddCategory}
                    setShow={setModalAddCategory}
                    fetchListCategories={fetchListCategories}
                    fetchAddCategory={fetchAddCategory}
                />
            </>
        }
        </>
    )
}
export default Categories