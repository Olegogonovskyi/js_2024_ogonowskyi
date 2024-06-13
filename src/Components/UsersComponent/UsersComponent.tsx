import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent: FC = () => {

    let {users, statusLoading} = useAppSelector(state => state.userReducer)

    return (
        <div>
            {
                statusLoading ? users.map(user => <UserComponent user={user} key={user.id}/>) :
                    <h1>Looooaaadddiiing</h1>
            }
        </div>
    );
};

export default UsersComponent;