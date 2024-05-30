import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPairModel} from "../../Models/ITokenObtainPairModel/ITokenObtainPairModel";
import {authService} from "../../Services/authService";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";
import {FormLoginValidator} from "../../Validators/FormLoginValidator";

const LoginFormComponent: FC = () => {
    const [error, setError] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<ITokenObtainPairModel>({mode: "all", resolver: joiResolver(FormLoginValidator)})
    const navigate = useNavigate()
    const sendUserData = async (userFormData: ITokenObtainPairModel) => {
        try {
            const logResponse = await authService.authLogin(userFormData)
            setError(!logResponse)
            logResponse && navigate('/cars')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            {
                error && <h1>Ти певно пяний, скільки бачиш перед собою статусів 401??</h1>
            }
            <form onSubmit={handleSubmit(sendUserData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button disabled={!isValid}>login</button>
                {errors.username && <h4>username error: {errors.username.message}</h4>}
                {errors.password && <h4>password error: {errors.password.message}</h4>}

            </form>
        </div>
    );
};

export default LoginFormComponent;