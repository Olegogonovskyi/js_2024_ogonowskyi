import React, {FC} from 'react';
import IUsersmodel from "../../IUsersmodel/IUsersmodel";
import {NavigateFunction, useNavigate} from "react-router-dom";

interface INavigateUserProps {
    id: number
}
const User: FC<IUsersmodel> = ({id, username, name}) => {
    const navigate: NavigateFunction = useNavigate()
    return (
        <div>
            <h3>{id}: {name} - {username}</h3>
            <button onClick={() => {
                navigate('/userpost', {state:  {id}})
            }} >what he said</button>
        </div>
    );
};

export default User;