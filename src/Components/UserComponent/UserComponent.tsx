import React, {FC} from 'react';
import {IuserModel} from "../../models/IuserModel";

const UserComponent: FC<{ user: IuserModel }> = ({user}) => {
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}</h1>
        </div>
    );
};

export default UserComponent;