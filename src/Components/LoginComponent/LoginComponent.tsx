import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPair} from "../../Models/ITokenObtainPair";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {authActions} from "../../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {urls} from "../../Constants/Urls";

const LoginComponent: FC = () => {
const {loginError} = useAppSelector(state => state.authReducer)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm<ITokenObtainPair>({
        defaultValues: {
            username: 'OlegOg',
            password: 'OlegOg007$'
        }
    })

    const setLoginData = async (user: ITokenObtainPair ) => {
        const {meta: {requestStatus}} = await dispatch(authActions.isLogined({user}))

        if(requestStatus === 'fulfilled') {
navigate(urls.cars)
        }

    }


    return (
        <div>
            {loginError && <h2>{loginError}</h2>}
            <form onSubmit={handleSubmit(setLoginData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;