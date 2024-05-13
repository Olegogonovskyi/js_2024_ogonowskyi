import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IUsermodel} from "../models/IUsermodel";
import {joiResolver} from "@hookform/resolvers/joi";
import {validationUser} from "../validation/validation";

const Formcomponent: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors}
    } = useForm<IUsermodel>({mode: "all", resolver: joiResolver(validationUser)})
    const saveFormsData = (formsData: IUsermodel) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: formsData.name,
                username: formsData.username,
                email: formsData.email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveFormsData)}>
                <input type="text" {...register('name')} />
                <input type="text" {...register('username')} />
                <input type="text" {...register('email')} />

                <button disabled={!isValid}>send data</button>

                {errors.name && <h5>There is error in name input: {errors.name.message}</h5>}
                {errors.username && <h5>There is error in username input: {errors.username.message}</h5>}
                {errors.email && <h5>There is error in email input: {errors.email.message}</h5>}
            </form>

        </div>
    );
};

export default Formcomponent;