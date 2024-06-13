import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPostModel} from "../../models/IPostModel";
import {postApiService} from "../../servicers/post.api.service";
import {AxiosError} from "axios";


interface postsSliceModel {
    posts: IPostModel[],
    favoritePost: IPostModel | undefined,
    isLoaded: boolean
}

const initialState: postsSliceModel = {
    posts: [],
    favoritePost: undefined,
    isLoaded: false
}

const loadPosts = createAsyncThunk(
    'postsSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postApiService.getAll()
            thunkAPI.dispatch(postsActions.isLoadetStatusChanger(true))
            return thunkAPI.fulfillWithValue(posts)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const loadFavoriteUser = createAsyncThunk(
    'postsSlice/loadFavoriteUser',
    async (id: string | undefined, thunkAPI) => {
        try {
            if (id) {
                const favoritePost = await postApiService.getById(id)
                return thunkAPI.fulfillWithValue(favoritePost)
            }
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        isLoadetStatusChanger: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(loadFavoriteUser.fulfilled, (state, action) => {
            state.favoritePost = action.payload
        })
})

const {reducer: postsReducer, actions} = postsSlice

const postsActions = {
    ...actions,
    loadFavoriteUser,
    loadPosts
}

export {postsActions, postsReducer}