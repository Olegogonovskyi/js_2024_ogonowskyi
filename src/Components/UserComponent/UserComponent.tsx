import React, {FC} from 'react';
import {IuserModel} from "../../models/IuserModel";
import {useStore} from "../../context/Store";

const UserComponent: FC<{ user: IuserModel }> = ({user}) => {
    const {usersStore: {setFavoriteUser}} = useStore()
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}</h1> <button onClick={()=> setFavoriteUser(user)}>set favorite</button>
        </div>
    );
};

export default UserComponent;