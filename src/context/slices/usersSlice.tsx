import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IuserModel} from "../../models/IuserModel";

export type usersState = {
    users: IuserModel[],
    favoriteUser: IuserModel | null
}

const initialState: usersState = {
    users: [],
    favoriteUser: null
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        getAllUsers: (state, action: PayloadAction<IuserModel[]>) => {state.users = action.payload},
        setfavorite: (state, action: PayloadAction<IuserModel | null>) => {state.favoriteUser = action.payload}
    }
})


const {reducer: usersReducer, actions} = usersSlice
const usersActions = {
    ...actions
}

export {usersActions, usersReducer}