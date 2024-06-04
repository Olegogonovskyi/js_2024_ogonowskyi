import React, {FC, useContext} from 'react';
import {Context} from "../../context/ContextProvider";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent: FC = () => {
    const {usersStore: {allusers}} = useContext(Context)
    return (
        <div>
            {
                allusers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;