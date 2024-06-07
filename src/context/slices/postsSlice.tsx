import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPostModel} from "../../models/IPostModel";


type postsState = {
    posts: IPostModel[]
}

const initialState: postsState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        getAllPosts: (state, action: PayloadAction<IPostModel[]>) => {
           state.posts = action.payload
        }
    }
})

const {reducer: postsReducer, actions} =  postsSlice
const postsActions = {
    ...actions
}

export {postsActions, postsReducer}