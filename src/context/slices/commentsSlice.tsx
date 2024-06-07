import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICommentModel} from "../../models/ICommentModel";


type commentsState = {
    comments: ICommentModel[]
}

const initialState: commentsState = {
    comments: []
}

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        getAllcomments: (state, action: PayloadAction<ICommentModel[]>) => {
            state.comments = action.payload
        }
    }
})

const {reducer: commentsReducer, actions} =  commentsSlice
const commentsActions = {
    ...actions
}

export {commentsActions, commentsReducer}