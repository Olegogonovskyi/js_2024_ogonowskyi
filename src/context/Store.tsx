
import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";
import {postsReducer} from "./slices/postsSlice";
import {commentsReducer} from "./slices/commentsSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;