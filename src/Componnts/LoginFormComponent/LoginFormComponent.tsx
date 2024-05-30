import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPairModel} from "../../Models/ITokenObtainPairModel/ITokenObtainPairModel";

const LoginFormComponent: FC = () => {
    const {register, handleSubmit} = useForm<ITokenObtainPairModel>()
    const sendUserData = async (userFormData: ITokenObtainPairModel) => {
        await console.log(userFormData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(sendUserData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default LoginFormComponent;