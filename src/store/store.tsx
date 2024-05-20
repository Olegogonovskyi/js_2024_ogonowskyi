import {configureStore} from "@reduxjs/toolkit";
import {usersSlicereducer} from "./usersSlice/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersSlicereducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;