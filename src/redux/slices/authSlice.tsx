import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ITokenObtainPair} from "../../Models/ITokenObtainPair";
import {authService} from "../../services/auth.service";
import {AxiosError} from "axios";
import {IUserResponse} from "../../Models/IUserResponse";

type authSliceType = {
    loginError: string,
    currentUser: IUserResponse | null
}

const initialState: authSliceType = {
    loginError: '',
    currentUser: null
}

const isLogined = createAsyncThunk<IUserResponse, {user: ITokenObtainPair}>(
    'authSlice/isLogined',
    async ({user}, {rejectWithValue}) => {
        try {
            const currentUserResp = await authService.authLogin(user)
            return currentUserResp
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
        .addCase(isLogined.fulfilled, (state, action) => {state.currentUser = action.payload})
        .addCase(isLogined.rejected, state => {state.loginError = 'Wrong username or password'})
        .addMatcher(isFulfilled(), state => {state.loginError = ''})
})

const {reducer: authReducer, actions} = authSlice

const authActions = {
    ...actions,
    isLogined
}

export {authReducer, authActions}