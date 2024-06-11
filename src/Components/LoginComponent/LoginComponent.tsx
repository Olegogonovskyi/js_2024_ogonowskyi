import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services/auth.service";
import {ITokenObtainPair} from "../../Models/ITokenObtainPair";

const LoginComponent: FC = () => {
    const {register, handleSubmit} = useForm<ITokenObtainPair>({
        defaultValues: {
            username: 'OlegOg',
            password: 'OlegOg007$'
        }
    })

    const setLoginData = (loginData: ITokenObtainPair) => {
        authService.authLogin(loginData)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(setLoginData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;