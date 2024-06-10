
import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";
import {postsReducer} from "./slices/postsSlice";
import {commentsReducer} from "./slices/commentsSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// const useAppSlector = useSelector.withTypes<RootState>

export {
    useAppDispatch
}