import React, {FC, useEffect, useState} from 'react';
import {IUser, UserProps} from "../../models/allmodels";
import User from "../User/User";
import {getallusers} from "../../services/users.api";

const Users:FC<UserProps> = ({clikker}) => {
    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getallusers()
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            {
                users.map(({id, name}) => <User key = {id} name = {name} id={id} clikker={clikker} />)
            }
        </div>
    );
};

export default Users;