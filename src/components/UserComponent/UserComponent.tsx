import React, {FC} from 'react';
import {IUserbasicmodel} from "../../models/IUserbasicmodel";
import {useNavigate} from "react-router-dom";

const UserComponent: FC<{ user: IUserbasicmodel }> = ({user}) => {
    const navigate = useNavigate()
    const userHandler = () => {
        navigate(`/users/${user.id}`, {state: {user}})
    }

    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}  </h1>
            <button onClick={userHandler}>details</button>
        </div>
    );
};

export default UserComponent;