import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IFormOneModel} from "../../models/Form models/IFormOneModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {formTwovalid} from "../../Validation/formTwovalid";

const FormTwoComponent:FC = () => {

    const {
        register,
        handleSubmit,
        formState: {isValid, errors}} = useForm<IFormOneModel>({mode: "all",resolver: joiResolver(formTwovalid)})
    const formTwoHandler = (formTwoData: IFormOneModel) => {
      console.log(formTwoData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formTwoHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('email')}/>
                <input type="number" {...register('age')}/>

                <button disabled={!isValid} >Click</button>

                {errors.username && <p>{errors.username.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.age && <p>{errors.age.message}</p>}
            </form>
        </div>
    );
};

export default FormTwoComponent;