import {createSlice} from "@reduxjs/toolkit";
import {ICalcModel} from "../../models/ICalcModel";

const initialState: ICalcModel = {
    value: 0
}

const calcOneSlice = createSlice({
    name: 'calcOneSlice',
    initialState,
    reducers: {
        inc: state => {state.value +=1}
        dec: state => {state.value -=1}
        reset: state => {state.value =0}
    }
})

const {reducer: calcOneReducer, actions} = calcOneSlice

const calcOneActions = {
    ...actions
}

export {calcOneActions, calcOneReducer}