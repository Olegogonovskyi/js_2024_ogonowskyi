import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userReducer} from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        userReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>()
const useAppSelector = useSelector.withTypes<RootState>();

export {useAppDispatch, useAppSelector}