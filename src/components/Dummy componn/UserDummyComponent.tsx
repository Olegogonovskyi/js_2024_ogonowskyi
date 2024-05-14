import React, {FC} from 'react';
import {IUserDummyShortWrap} from "../../models/DummyModels/IUserDummyShortWrap";

const UserDummyComponent: FC<IUserDummyShortWrap> = ({user}) => {
    return (
        <div>
            <h2>id: {user.id} --- {user.firstName} {user.lastName}</h2>
            <button onClick={}>Click for details</button>
        </div>
    );
};

export default UserDummyComponent;