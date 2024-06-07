import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IuserModel} from "../../models/IuserModel";

type usersState = {
    users: IuserModel[]
}

const initialState: usersState = {
    users: []
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        getAllUsers: (state, action: PayloadAction<IuserModel[]>) => {
            state.users = action.payload
        }
    }
})

const {reducer: usersReducer, actions} =  usersSlice
const usersActions = {
    ...actions
}

export {usersActions, usersReducer}