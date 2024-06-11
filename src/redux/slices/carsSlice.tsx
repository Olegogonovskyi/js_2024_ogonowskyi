import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICarPaginated} from "../../Models/ICarPaginated";

const initialState: ICarPaginated = {
    total_items: 0,
    total_pages: 0,
    prev: null,
    next: null,
    items: []
}

const loadCarPaginate = createAsyncThunk(
    'carsSlice/loadCarPaginate',
    async (arg, thunkAPI) => {
        try {
            const CarPaginateObject = await
        } catch (e) {

        }
    }
)

const carsSlice = createSlice({
    name: carsSlice,
    initialState,
    reducers: {}
})