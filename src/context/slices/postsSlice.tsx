import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPostModel} from "../../models/IPostModel";


type postsState = {
    posts: IPostModel[],
    favoritePost: IPostModel | null
}

const initialState: postsState = {
    posts: [],
    favoritePost: null
}

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        getAllPosts: (state, action: PayloadAction<IPostModel[]>) => {state.posts = action.payload},
        setFavoritePost: (state, action: PayloadAction<IPostModel | null>) => {state.favoritePost = action.payload}
    }
})

const {reducer: postsReducer, actions} =  postsSlice
const postsActions = {
    ...actions
}

export {postsActions, postsReducer}