import React from 'react';
import {useForm} from "react-hook-form";

const FormOneComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {isValid, errors}} = useForm({mode:"all", })


    return (
        <div>
            <form >
                <input type="text" {...register('username')}/>
                <input type="text" {...register('email')}/>
                <input type="number" {...register('age')}/>
            </form>
        </div>
    );
};

export default FormOneComponent;