import React, {FC, useEffect, useState} from 'react';
import IUsermodel from "../../models/IUsermodel";
import getallusers from "../../services/users.api";
import User from "../User/User";

const Users:FC = () => {
    const [users, setUsers] = useState<IUsermodel[]>([])
    useEffect(() => {
        getallusers().then(value => setUsers(value.data.users))
    }, []);

    return (
        <div>
            {
                users.map(({lastName, firstName, id, age, gender, city, image}) => <User key={id} id={id} age={age} city={city} gender={gender} lastName={lastName} firstName={firstName} image={image} />)
            }

        </div>
    );
};

export default Users;