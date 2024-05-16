import React, {FC} from 'react';
import {IUserbasicmodel} from "../../models/IUserbasicmodel";

const UserComponent: FC<{ user: IUserbasicmodel }> = ({user}) => {
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}  </h1>
        </div>
    );
};

export default UserComponent;