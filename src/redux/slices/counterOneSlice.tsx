import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type counterOneType = {
    value: number
}

const initialState: counterOneType = {
    value: 0
}

export const counterOneSlice = createSlice({
    name: 'counterOne',
    initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        reset: (state) => {state.value = 0},
        addHundred: (state, action: PayloadAction<number>) => {state.value = state.value + action.payload}
    }
})

const {reducer: counterOneReducer, actions} = counterOneSlice

const counterOneActions = {
    ...actions
}

export {counterOneActions, counterOneReducer}