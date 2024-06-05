import React, {FC} from 'react';
import {useStore} from "../../context/Store";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent: FC = () => {
    const {usersStore: {allUsers}} = useStore()
    return (
        <div>
            {
                allUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;