import React, {FC} from 'react';

import {IUserModelWrap} from "../../../models/Jsonplaceholder models/IUserModelWrap";

const Usercomponent: FC<IUserModelWrap> = ({user}) => {
    return (
        <div>
            <h1>{user.id} - {user.name}</h1>
        </div>
    );
};

export default Usercomponent;