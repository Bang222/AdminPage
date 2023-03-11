import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'user',
    initialState : {
        login: {
            currentUser: null,
            isFetching: false,
            errors: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.errors = false;
        },
        loginFailure: (state) => {
            state.login.isFetching = false;
            state.login.errors= true;
        },logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.errors = false;
        },
        logoutFailed:(state) =>{
            state.login.isFetching=false;
            state.login.errors=true;
        },
        logoutStart :(state) => {
            state.login.isFetching = true;
            state.login.errors=false;
        }
    }
})
export const {loginStart,loginSuccess,loginFailure,logoutStart,logoutSuccess,logoutFailed,} = authSlice.actions;
export default authSlice.reducer;