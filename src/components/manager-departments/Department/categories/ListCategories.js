import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import "./loading.css"
import EditModalCategory from "./EditModalCategory";
import {useState} from "react";

const ListCategories = (props) => {
    const {fetchUpdateCategory, categoryName, description, categoryId, fetchDeleteCategory, fetchListCategories} = props
    const loading = useSelector((state) => state.departments.deleteCategory?.isFetching)
    const error = useSelector((state) => state.departments.deleteCategory?.error)
    const [modalEditCategory, setModalEditCategory] = useState(false)
    const handleDelete = async (categoryId) => {
        if (!error) {
            const checkId = {
                id: categoryId,
            }
            await fetchDeleteCategory(checkId)
            await fetchListCategories()
            toast.success("Delete successfully")
        } else toast.error("You can not Delete")
    }
    // console.log("list");
    return loading ? <span className="loader"></span> : (
        <>
            <tr>
                <td>{categoryId}</td>
                <td>{categoryName}</td>
                <td>{description}</td>
                <td>
                    <button type="button"
                            onClick={() => setModalEditCategory(true)}
                            className={"bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-1.5 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"}>
                        Edit
                    </button>
                </td>
                <td>
                    <button type="button"
                            className={"bg-red-500 hover:bg-red-400 text-white font-bold py-1.5 px-4 border-b-4 border-red-700 hover:border-yellow-red rounded"}
                            onClick={() => handleDelete(categoryId)}
                    >Delete
                    </button>
                </td>
            </tr>
            <EditModalCategory
                showUpdate={modalEditCategory}
                setShowUpdate={setModalEditCategory}
                fetchListCategories={fetchListCategories}
                categoryId={categoryId}
                categoryName={categoryName}
                description={description}
                fetchUpdateCategory={fetchUpdateCategory}
            />
        </>
    )
}
export default ListCategories