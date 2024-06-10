import React, {FC} from 'react';
import {useAppSelector} from "../../context/Store";
import UserComponent from "../UserComponent/UserComponent";


const UsersComponent: FC = () => {
    const {users} = useAppSelector(state => state.users)
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;