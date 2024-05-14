import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IPostData} from "../models/IPostData";
import {joiResolver} from "@hookform/resolvers/joi";
import {validationUser} from "../validation/validation";
import postDatatoApi from "../services/axios.api.service";

const Formcomponent: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors}
    } = useForm<IPostData>({mode: "all", resolver: joiResolver(validationUser)})

    const saveFormsData = (formsData: IPostData) => {
        postDatatoApi(formsData).then(value => console.log(value))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(saveFormsData)}>
                <input type="text" {...register('title')} />
                <input type="text" {...register('body')} />
                <input type="number" {...register('userId')} />

                <button disabled={!isValid}>send data</button>

                {errors.title && <h5>There is error in name input: {errors.title.message}</h5>}
                {errors.body && <h5>There is error in username input: {errors.body.message}</h5>}
                {errors.userId && <h5>There is error in email input: {errors.userId.message}</h5>}
            </form>

        </div>
    );
};

export default Formcomponent;