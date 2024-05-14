import React, {FC} from 'react';
import {IUserModelWrap} from "../../../models/Jsonplaceholder models/IUserModelWrap";
import {useNavigate} from "react-router-dom";


const Usercomponent: FC<IUserModelWrap> = ({user}) => {
    const navigate = useNavigate()
    const userDetailsbutton = () => {
        navigate(user.id.toString(), {state: {user}})
    }

    return (
        <div>
            <h1>{user.id} - {user.name}</h1>
            <button onClick={userDetailsbutton}>Details</button>
        </div>
    );
};

export default Usercomponent;