import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUserFullModel} from "../../../models/Jsonplaceholder models/IUserFullModel";

const UserDetailComponent: FC = () => {
const [user, setUser] = useState<IUserFullModel>()
    const {state} = useLocation()
    useEffect(() => {
        setUser(state.user)
    }, [state]);
    return (
        <div>
            <h1>{user?.id}: {user?.name} - {user?.username}</h1>
            <p>{user?.email}, {user?.phone}</p>
            <p>{user?.address.city} - {user?.address.street} - {user?.address.zipcode}</p>

        </div>
    );
};

export default UserDetailComponent;