import React, {FC} from 'react';
import {useForm} from "react-hook-form";

const LoginFormComponent: FC = () => {
    const {} = useForm()
    return (
        <div>
            <form>
                <input type="text"/>
            </form>
        </div>
    );
};

export default LoginFormComponent;