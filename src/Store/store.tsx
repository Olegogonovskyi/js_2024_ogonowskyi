import {configureStore} from "@reduxjs/toolkit";
import {calcOneReducer} from "./slices/calcOneSlice";

const store = configureStore({
    reducer: {
        countOne: calcOneReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store