import React, {FC, useContext} from 'react';
import {IuserModel} from "../../models/IuserModel";
import {Context} from "../../context/ContextProvider";

const UserComponent: FC<{ user: IuserModel }> = ({user}) => {
    const {usersStore: {setFavoriteUser}} = useContext(Context)
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}</h1> <button onClick={()=> setFavoriteUser(user)}>set favorite</button>
        </div>
    );
};

export default UserComponent;