import React, {FC} from 'react';
import IUsermodel from "../../models/user_model";
import IUserProps from "../../models/userProps";


type Iuserproptype<T> = T & IUserProps
const User:FC<Iuserproptype<IUsermodel>> = ({id, name, email, hendler}) => {
    return (
        <div>
            {id} --- {name} ---- {email} <button onClick={()=> hendler(id)} >click</button>
        </div>
    );
};

export default User;