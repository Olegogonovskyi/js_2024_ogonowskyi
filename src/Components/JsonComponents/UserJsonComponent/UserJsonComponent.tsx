import React, {FC} from 'react';
import {IUserJsonBaseModel} from "../../../models/modelsJson/IUserJsonBaseModel";
import {useNavigate} from "react-router-dom";

const UserJsonComponent: FC<{user: IUserJsonBaseModel}> = ({user}) => {
   const navigate = useNavigate()
    const userJsonDetails = () => {
      navigate(user.id.toString(), {state: {user}})
    }
    return (
        <div>
            <h1>{user.id}: {user.username}</h1>
            <button onClick={userJsonDetails}>details</button>
        </div>
    );
};

export default UserJsonComponent;