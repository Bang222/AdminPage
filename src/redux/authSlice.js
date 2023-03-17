import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'user',
    initialState : {
        login: {
            currentUser: null,
            isFetching: false,
            err: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
            state.login.err= false;
        },
        loginSuccess: (state,action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.err = false;
        },
        loginFailure: (state) => {
            state.login.isFetching = false;
            state.login.err= true;
        },logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.err = false;
        },
        logoutFailed:(state) =>{
            state.login.isFetching=false;
            state.login.err=true;
        },
        logoutStart :(state) => {
            state.login.isFetching = true;
            state.login.err=false;
        }
    }
})
export const {loginStart,loginSuccess,loginFailure,logoutStart,logoutSuccess,logoutFailed,} = authSlice.actions;
export default authSlice.reducer;