import React, {FC} from 'react';
import {IUserbasicmodel} from "../../models/IUserbasicmodel";
import {useNavigate} from "react-router-dom";

const UserComponent: FC<{ user: IUserbasicmodel }> = ({user}) => {
    const navigate = useNavigate()
    const userIdHendler = () => {
        navigate(user.id.toString() + '/posts', {state: user.id})
    }
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}  </h1>
            <button onClick={userIdHendler}>What it write??</button>
        </div>
    );
};

export default UserComponent;