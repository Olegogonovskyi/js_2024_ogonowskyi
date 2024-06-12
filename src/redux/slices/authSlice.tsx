import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ITokenObtainPair} from "../../Models/ITokenObtainPair";
import {authService} from "../../services/auth.service";
import {AxiosError} from "axios";

type authSliceType = {
    loginError: string
}

const initialState: authSliceType = {
    loginError: ''
}

const isLogined = createAsyncThunk<void, {user: ITokenObtainPair}>(
    'authSlice/isLogined',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.authLogin(user)
        } catch (e) {
            const ResponseError = e as AxiosError
            return rejectWithValue(ResponseError?.response?.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(isLogined.rejected, state => {state.loginError = 'Wrong username or password'})
        .addMatcher(isFulfilled(), state => {state.loginError = ''})
})

const {reducer: authReducer, actions} = authSlice

const authActions = {
    ...actions,
    isLogined
}

export {authReducer, authActions}