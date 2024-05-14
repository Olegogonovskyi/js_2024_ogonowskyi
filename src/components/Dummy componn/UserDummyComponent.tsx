import React, {FC} from 'react';
import {IUserDummyShortWrap} from "../../models/DummyModels/IUserDummyShortWrap";
import {useNavigate} from "react-router-dom";

const UserDummyComponent: FC<IUserDummyShortWrap> = ({user}) => {
    const navigate = useNavigate();
    const userDummy = () => {
        navigate(user.id.toString(), {state: {user}})
    }

    return (
        <div>
            <h2>id: {user.id} --- {user.firstName} {user.lastName}</h2>
            <button onClick={userDummy}>Click for details</button>
        </div>
    );
};

export default UserDummyComponent;