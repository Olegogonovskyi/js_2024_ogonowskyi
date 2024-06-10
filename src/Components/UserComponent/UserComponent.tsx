import React, {FC} from 'react';
import {IuserModel} from "../../models/IuserModel";
import {usersActions} from "../../context/slices/usersSlice";
import {useAppDispatch} from "../../context/Store";


const UserComponent: FC<{ user: IuserModel }> = ({user}) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}</h1>
            <button onClick={() => {
                dispatch(usersActions.setfavorite(user))
            }}>add to favorite
            </button>


        </div>
    );
};

export default UserComponent;