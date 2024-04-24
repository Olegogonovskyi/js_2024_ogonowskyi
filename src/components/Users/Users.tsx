import React, {FC, useEffect, useState} from 'react';
import IUser from "../../models/IUser";
import User from "../User/User";


const Users:FC = () => {
    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            {
                users.map(({id, name}) => <User key = {id} name = {name} id={id} />)
            }
        </div>
    );
};

export default Users;