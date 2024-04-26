import React, {FC, memo, useEffect, useState} from 'react';
import IUsermodel from "../../models/user_model";
import getallusers from "../../servises/users.api";
import User from "../User/User";
import IUserProps from "../../models/userProps";

const Users:FC<IUserProps> = memo(({hendler}) => {

    const [users, setUsers] = useState<IUsermodel[]>([])
    useEffect(() => {
        getallusers().then(value => setUsers(value.data))
        console.log('kdkdkddkdk')
    }, [])

    return (
        <div>
            {
                users.map(({id, name, email}) => <User key={id} id={id} name={name} email={email} hendler={hendler} />)
            }
        </div>
    );
});

export default Users