import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IButtonFormone} from "../../models/IButtonFormone";

const Formcomp: FC = () => {
        const {
            register, handleSubmit, formState: {
                errors, isValid
            }
        } = useForm<IButtonFormone>({mode: "all"})

        const buttonFormOne = (formInfo: IButtonFormone) => {
            console.log(formInfo)
        }

        return (
            <div>
                <form onSubmit={handleSubmit(buttonFormOne)}>
                    <label>
                        <input type="text" {...register('username', {
                            required: true,
                            minLength: {value: 2, message: 'username must be longer then 1 symbol'},
                            maxLength: {value: 20, message: 'username must be shorter then 20 symbols'}
                        })}/>
                        {/*{errors.username && <h3>{errors.username.message} </h3>}*/}
                    </label>
                    <label>
                        <input type="text" {...register('password', {
                            required: true,
                            minLength: {value: 4, message: 'password must be longer then 4 symbols'},
                            maxLength: {value: 10, message: 'password must be longer then 10 symbols'}
                        })}/>
                        {/*{errors.password && <h3>{errors.password.message} </h3>}*/}
                    </label>
                    <label>
                        <input type="number" {...register('age', {
                            required: true,
                            valueAsNumber: true,
                            min: {value: 18, message: 'piece of shit go avay!!!'},
                            max: {value: 125, message: 'I think you are already dead'}
                        })}/>
                        {/*{errors.age && <h3>{errors.age.message} </h3>}*/}
                    </label>

                    <button disabled={!isValid}>Click</button>

                    {errors.username && <h3>{errors.username.message} </h3>}
                    {errors.password && <h3>{errors.password.message} </h3>}
                    {errors.age && <h3>{errors.age.message} </h3>}
                </form>

            </div>
        );
    }
;

export default Formcomp;