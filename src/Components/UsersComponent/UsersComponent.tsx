import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent: FC = () => {

    const {users} = useAppSelector(state => state.userReducer)
    return (
        <div>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;