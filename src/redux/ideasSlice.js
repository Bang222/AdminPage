import {createSlice} from "@reduxjs/toolkit";

export const IdeasSlice = createSlice({
    name:"ideas",
    initialState: {
        ideas: {
            allIdeas: null,
            isFetching: false,
            error: false,
        },
        comment: {
            allComments: null,
            isFetching: false,
            error: false,
        },
        msg:""
    },
    reducers : {
        getIdeaStart: (state) => {
            state.ideas.isFetching =true;
            state.ideas.error = false;
        },
        getIdeasError: (state) => {
            state.ideas.error = true;
            state.ideas.isFetching = false;
        },
        getIdeasSuccess :(state, action) => {
            state.ideas.allIdeas = action.payload;
            state.ideas.error = false;
            state.ideas.isFetching = false;
        },
        getCommentStart: (state) => {
            state.comment.isFetching =true;
            state.comment.error = false;
        },
        getCommentError: (state) => {
            state.comment.error = true;
            state.comment.isFetching = false;
        },
        getCommentSuccess :(state, action) => {
            state.comment.allComments = action.payload;
            state.comment.error = false;
            state.comment.isFetching = false;
        },
        deleteStart: (state) => {
            state.comment.isFetching =true;
            state.comment.error = false;
        },
        deleteError: (state) => {
            state.comment.error = true;
            state.comment.isFetching = false;
        },
        deleteSuccess :(state, action) => {
            state.msg = action.payload;
            state.comment.error = false;
            state.comment.isFetching = false;
        }
    }
})
export const {getIdeasSuccess,getIdeasError,getIdeaStart,
    getCommentSuccess,getCommentError,getCommentStart,
    deleteSuccess,deleteError,deleteStart
} = IdeasSlice.actions
export default IdeasSlice.reducer