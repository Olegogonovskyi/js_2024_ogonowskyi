import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/usersSlice"

const rtkStore = configureStore({
    reducer: {
        users: userReducer
    }
})

export type AppDispatch = typeof rtkStore.dispatch; // todo нехай gpt пояснить рядок
export type RootState = ReturnType<typeof rtkStore.getState>;

export default rtkStore