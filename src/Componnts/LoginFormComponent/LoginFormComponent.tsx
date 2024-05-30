import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPairModel} from "../../Models/ITokenObtainPairModel/ITokenObtainPairModel";
import {authService} from "../../Services/authService";
import {useNavigate} from "react-router-dom";

const LoginFormComponent: FC = () => {
    const [error, setError] = useState<boolean>(false)
    const {register, handleSubmit} = useForm<ITokenObtainPairModel>()
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
                error && <h1>Ти певно пяний?</h1>
            }
            <form onSubmit={handleSubmit(sendUserData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default LoginFormComponent;