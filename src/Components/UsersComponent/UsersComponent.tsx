import React, {FC} from 'react';
import {RootState} from "../../context/Store";
import UserComponent from "../UserComponent/UserComponent";
import {useSelector} from "react-redux";

const UsersComponent: FC = () => {
    const {users} = useSelector((state: RootState) => state.users)
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;