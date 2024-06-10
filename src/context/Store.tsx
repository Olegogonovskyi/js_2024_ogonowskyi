
import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";
import {postsReducer} from "./slices/postsSlice";
import {commentsReducer} from "./slices/commentsSlice";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>();

export {
    useAppDispatch, useAppSelector
}