import {createSlice} from "@reduxjs/toolkit";

export const DepartmentSlice = createSlice({
    name: 'department',
    initialState: {
        department: {
            allDepartments: null,
            isFetching: false,
            success: false,
            error: false,
        },
        addCategory: {
            isFetching: false,
            error: false,
            success: false,
        },
        deleteCategory: {
            isFetching: false,
            error: false,
            success: false,
        },
        updateCategory: {
            isFetching: false,
            error: false,
            success: false,
        }
    },
    reducers: {
        getAllDepartmentsStart: (state) => {
            state.department.isFetching = true;
            state.department.error = false;
            state.department.success = false;
        },
        getAllDepartmentsSuccess: (state, action) => {
            state.department.isFetching = false;
            state.department.error = false;
            state.department.allDepartments = action.payload;
            state.department.success = true;
        },
        getAllDepartmentsFailure: (state) => {
            state.department.error = true;
            state.department.success = false;
            state.department.isFetching = false;
        },
        addCategoryStart: (state) => {
            state.addCategory.isFetching = true;
            state.department.success = false;
            state.addCategory.error = false;
        },
        addCategorySuccess: (state) => {
            state.addCategory.isFetching = false;
            state.addCategory.error = false;
            state.addCategory.success = true;
        },
        addCategoryFailure: (state) => {
            state.addCategory.error = true;
            state.addCategory.isFetching = false;
        },
        deleteCategoryStart: (state) => {
            state.deleteCategory.success = false;
            state.deleteCategory.error = false;
            state.deleteCategory.isFetching = true;
        },
        deleteCategorySuccess: (state,action) => {
            state.deleteCategory.isFetching = false;
            state.deleteCategory.error = false;
            state.deleteCategory.success = true;
        },
        deleteCategoryFailure:(state) => {
            state.deleteCategory.isFetching = false;
            state.deleteCategory.error = true;
            state.deleteCategory.success = false;
        },
        updateCategoryStart: (state) => {
            state.updateCategory.success = false;
            state.updateCategory.error = false;
            state.updateCategory.isFetching = true;
        },
        updateCategorySuccess: (state,action) => {
            state.updateCategory.isFetching = false;
            state.updateCategory.error = false;
            state.updateCategory.success = true;
        },
        updateCategoryFailure:(state) => {
            state.updateCategory.isFetching = false;
            state.updateCategory.error = true;
            state.updateCategory.success = false;
        },
    }
})
export const {
    getAllDepartmentsStart, getAllDepartmentsSuccess, getAllDepartmentsFailure
    , addCategoryStart, addCategoryFailure, addCategorySuccess,
    deleteCategoryStart,deleteCategorySuccess,deleteCategoryFailure,
    updateCategoryFailure,updateCategorySuccess,updateCategoryStart,
} = DepartmentSlice.actions;
export default DepartmentSlice.reducer;