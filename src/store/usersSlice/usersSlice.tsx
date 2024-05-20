import {createSlice} from "@reduxjs/toolkit";

import {IUserbasicmodel} from "../../models/IUserbasicmodel";

const initialState: IUserbasicmodel[] = [
    {
        id: 1,
        name: 'qwe',
        email: 'asd'
    },
    {
        id: 2,
        name: 'dhdhd',
        email: 'ysysys'
    }
]



export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const usersSlicereducer = usersSlice.reducer