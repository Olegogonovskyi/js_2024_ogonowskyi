import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserModel} from "../../models/IUserModel";
import {usersApiService} from "../../servicers/users.api.service";
import {AxiosError} from "axios";

interface IUsersSlice {
    users: IUserModel[],
    favoriteUser: IUserModel | undefined
}

const initialState: IUsersSlice = {
    users: [],
    favoriteUser: undefined
}


const usersLoading = createAsyncThunk(
    'usersSlice/usersLoading',
    async (arg, thunkAPI) => {
        try {
            const users = await usersApiService.getAll()
            return thunkAPI.fulfillWithValue(users)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }

    }
)

const userByIdLoading = createAsyncThunk(
    'usersSlice/userByIdLoading',
    async (arg: string | undefined, thunkAPI) => {
        try {
            if (arg) {
                const favoriteUser = await usersApiService.getById(arg)
                return thunkAPI.fulfillWithValue(favoriteUser)
            }
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }

)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(usersLoading.fulfilled, (state, action: PayloadAction<IUserModel[]>) => {
            state.users = action.payload
        })
        .addCase(userByIdLoading.fulfilled, (state, action) => {
            state.favoriteUser = action.payload
        })
})


const {reducer: userReducer, actions} = usersSlice

const userActions = {
    ...actions,
    usersLoading,
    userByIdLoading
}

export {userActions, userReducer}