import React, {FC, useEffect, useState} from 'react';
import {IUserJsonBaseModel} from "../../../models/modelsJson/IUserJsonBaseModel";
import {userJsonService} from "../../../servises/allServices";
import UserJsonComponent from "../UserJsonComponent/UserJsonComponent";

const UsersJsonComponent: FC = () => {
    const [users, setUsers] = useState<IUserJsonBaseModel[]>([])
    useEffect(() => {
        userJsonService.getAllUsersJson().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {
                users.map(user => < UserJsonComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersJsonComponent;