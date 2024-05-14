import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IFormOneModel} from "../../models/Form models/IFormOneModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {formOneValid} from "../../Validation/formOneValid";

const FormOneComponent: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors}
    } = useForm<IFormOneModel>({mode: "all", resolver: joiResolver(formOneValid)})
    const forOneData = (dataFormone: IFormOneModel) => {
        console.log(dataFormone)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(forOneData)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('email')}/>
                <input type="number" {...register('age')}/>

                <button disabled={!isValid}>send</button>

                {errors.username && <p>{errors.username.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.age && <p>{errors.age.message}</p>}
            </form>
        </div>
    );
};

export default FormOneComponent;