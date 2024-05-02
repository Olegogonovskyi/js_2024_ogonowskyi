import React, {FC, useEffect, useState} from 'react';
import IUsersmodel from "../../IUsersmodel/IUsersmodel";
import User from "../User/User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUsersmodel[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
    }, []);

    return (
        <div>
            {
                users.map(({name, username, id}) => <User key={id} id={id} name={name} username={username} />)
            }

        </div>
    );
};

export default Users;