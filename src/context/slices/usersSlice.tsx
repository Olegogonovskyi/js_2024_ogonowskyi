import {IUserStateModel} from "../../models/IUserStateModel";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {UsersApiService} from "../../services/users.api.service";
import {IuserModel} from "../../models/IuserModel";

const initialState: IUserStateModel = {
    items: [],
    status: "idle",
    error: null
}

// export const axiosUsers = createAsyncThunk('users/axiosUsers', async () => {
//     const response = await axiosInstanse.get(urls.users)
//     return response.data
// })

export const getAllUsers = createAsyncThunk('users/axiosUsers', async () => {
    const {data} = await UsersApiService.getAllUsers()
    return data
})

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, state => {
                state.status = 'loading'
            })
            .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<IuserModel[]>) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.status = "failed";
                state.error =  'Uggggggg'
            })
    }
})
const {reducer: userReducer, actions} = userSlice
export {userReducer, actions}
// export default userSlice.reducer