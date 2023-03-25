import {createSlice} from "@reduxjs/toolkit";

export const DepartmentSlice = createSlice({
    name: 'department',
    initialState: {
        categories: {
            allCategories: null,
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
        },
        listDepartments: {
            allDepartments: null,
            isFetching: false,
            success: false,
            error: false,
        }
    },
    reducers: {
        getAllCategoriesStart: (state) => {
            state.categories.isFetching = true;
            state.categories.error = false;
            state.categories.success = false;
        },
        getAllCategoriesSuccess: (state, action) => {
            state.categories.isFetching = false;
            state.categories.error = false;
            state.categories.allCategories = action.payload;
            state.categories.success = true;
        },
        getAllCategoriesFailure: (state) => {
            state.categories.error = true;
            state.categories.success = false;
            state.categories.isFetching = false;
        },
        addCategoryStart: (state) => {
            state.addCategory.isFetching = true;
            state.categories.success = false;
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
        deleteCategorySuccess: (state, action) => {
            state.deleteCategory.isFetching = false;
            state.deleteCategory.error = false;
            state.deleteCategory.success = true;
        },
        deleteCategoryFailure: (state) => {
            state.deleteCategory.isFetching = false;
            state.deleteCategory.error = true;
            state.deleteCategory.success = false;
        },
        updateCategoryStart: (state) => {
            state.updateCategory.success = false;
            state.updateCategory.error = false;
            state.updateCategory.isFetching = true;
        },
        updateCategorySuccess: (state, action) => {
            state.updateCategory.isFetching = false;
            state.updateCategory.error = false;
            state.updateCategory.success = true;
        },
        updateCategoryFailure: (state) => {
            state.updateCategory.isFetching = false;
            state.updateCategory.error = true;
            state.updateCategory.success = false;
        },
        getAllDepartmentsStart: (state) => {
            state.listDepartments.isFetching = true;
            state.listDepartments.error = false;
            state.listDepartments.success = false;
        },
        getAllDepartmentsSuccess: (state, action) => {
            state.listDepartments.isFetching = false;
            state.listDepartments.error = false;
            state.listDepartments.allDepartments = action.payload;
            state.listDepartments.success = true;
        },
        getAllDepartmentsFailure: (state) => {
            state.listDepartments.error = true;
            state.listDepartments.success = false;
            state.listDepartments.isFetching = false;
        },
    }
})
export const {
    getAllCategoriesFailure, getAllCategoriesStart, getAllCategoriesSuccess
    ,addCategoryStart, addCategoryFailure, addCategorySuccess,
    deleteCategoryStart, deleteCategorySuccess, deleteCategoryFailure,
    updateCategoryFailure, updateCategorySuccess, updateCategoryStart,
    getAllDepartmentsStart,getAllDepartmentsSuccess,getAllDepartmentsFailure
} = DepartmentSlice.actions;
export default DepartmentSlice.reducer;