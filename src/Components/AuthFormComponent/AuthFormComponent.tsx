import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPair} from "../../models/ITokenObtainPair/ITokenObtainPair";
import {authService} from "../../services/auth.service";

const AuthFormComponent: FC = () => {
    const {register, handleSubmit} = useForm<ITokenObtainPair>()
const sendUserData =  async (userFormData: ITokenObtainPair) => {
    await authService.authUser(userFormData)

}
    return (
        <div>
            <form onSubmit={handleSubmit(sendUserData)}>
                <input type="text" {...register('username')} />
                <input type="text" {...register('password')} />
                <button >send</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;