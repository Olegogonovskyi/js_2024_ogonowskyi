import React, {FC, useEffect, useState} from 'react';
import {IUsersDummyShort} from "../../models/DummyModels/IUsersDummyShort";
import getAllUsersDummy from "../../services/Dummy api service";
import UserDummyComponent from "./UserDummyComponent";

const UsersDummyComponent: FC = () => {

    const [users, setUsers] = useState<IUsersDummyShort[]>([])
    useEffect(() => {
        getAllUsersDummy().then(({data}) => setUsers(data.users))
    }, []);
    return (
        <div>
            {
                users.map(user => <UserDummyComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersDummyComponent;