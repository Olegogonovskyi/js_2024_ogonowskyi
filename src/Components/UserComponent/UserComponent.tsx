import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useNavigate} from "react-router-dom";

const UserComponent: FC<{user: IUserModel}> = ({user}) => {
    const {id, name} = user
    const navigate = useNavigate()
    return (
        <div>
            <h1>{id}: {name}</h1>
            <button onClick={() => navigate(`${id}`)}>Кніпка</button>
        </div>
    );
};

export default UserComponent;