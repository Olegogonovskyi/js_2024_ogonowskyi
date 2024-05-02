import React, {FC} from 'react';
import IUsersmodel from "../../IUsersmodel/IUsersmodel";

const User: FC<IUsersmodel> = ({id, username, name}) => {
    return (
        <div>
            <h3>{id}: {name} - {username}</h3>
            <button onClick={} >what he said</button>
        </div>
    );
};

export default User;