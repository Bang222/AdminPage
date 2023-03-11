import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false,
        },
        msg:"",
    },
    reducers: {
        editUserStart: (state) => {
            state.users.isFetching = true;
            state.users.error = false;
        },
        editUserError: (state) => {
            state.users.isFetching = true;
            state.users.error = false;
        },
        editUserSuccess: (state) => {
            state.users.isFetching = true;
            state.users.error = false;
        },
        getUserStart: (state) => {
            state.users.isFetching = true;
            state.users.error = false;
        },
        getUserError: (state) => {
            state.users.error = true;
            state.users.isFetching = false;
        },
        getUserSuccess: (state, action) => {
            state.users.allUsers = action.payload;
            state.users.error = false;
            state.users.isFetching = false;
        },
        deleteUserStart: (state) => {
            state.users.isFetching =true;
            state.users.error = false;
        },
        deleteUserError: (state) => {
            state.users.error = true;
            state.users.isFetching = false;
        },
        deleteUserSuccess :(state, action) => {
            state.users.allUsers = null;
            state.users.error = false;
            state.users.isFetching = false;
        }
    }
})
export const {getUserStart, getUserError, getUserSuccess,
    editUserSuccess,editUserError,editUserStart,
    deleteUserSuccess,deleteUserError,deleteUserStart
} = userSlice.actions
export default userSlice.reducer

