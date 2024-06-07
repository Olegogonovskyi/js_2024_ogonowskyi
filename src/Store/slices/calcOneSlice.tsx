import {createSlice} from "@reduxjs/toolkit";
import {ICalcModel} from "../../models/ICalcModel";

const initialState: ICalcModel = {
    count: 0
}

const calcOneSlice = createSlice({
    name: 'calcOneSlice',
    initialState,
    reducers: {
        inc: state => {
            state.count += 1
        },
        dec: state => {
            state.count -= 1
        },
        reset: state => {
            state.count = 0
        }
    }
})

const {reducer: calcOneReducer, actions} = calcOneSlice

const calcOneActions = {
    ...actions
}

export {calcOneActions, calcOneReducer}