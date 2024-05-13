import React, {FC, useState} from 'react';
import getAllUsersJson from "../../../services/Json placeholder service/users.api.service";
import {IUserFullModel} from "../../../models/Jsonplaceholder models/IUserFullModel";
import Usercomponent from "../User component/Usercomponent";

const Userscomponent: FC = () => {

    const [users, setUsers] = useState<IUserFullModel[]>([])

    getAllUsersJson().then(({data}) => setUsers(data))
    return (
        <div>
            {
                users.map(user => <Usercomponent key={user.id} user = {user}/> )
            }
        </div>
    );
};

export default Userscomponent;