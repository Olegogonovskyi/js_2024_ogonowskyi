import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {IButtonFormone} from "../../models/IButtonFormone";
import {joiResolver} from "@hookform/resolvers/joi";
import {formCompTwoValid} from "../../validators/formcomptwovalid";

const Formcomptwo: FC = () => {
        const {
            register, handleSubmit, formState: {
                errors, isValid
            }
        } = useForm<IButtonFormone>({mode: "all", resolver: joiResolver(formCompTwoValid)})

        const buttonFormOne = (formInfo: IButtonFormone) => {
            console.log(formInfo)
        }

        return (
            <div>
                <form onSubmit={handleSubmit(buttonFormOne)}>
                    <label>
                        <input type="text" {...register('username')}/>
                        {/*{errors.username && <h3>{errors.username.message} </h3>}*/}
                    </label>
                    <label>
                        <input type="text" {...register('password')}/>
                        {/*{errors.password && <h3>{errors.password.message} </h3>}*/}
                    </label>
                    <label>
                        <input type="number" {...register('age')}/>
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

export default Formcomptwo;