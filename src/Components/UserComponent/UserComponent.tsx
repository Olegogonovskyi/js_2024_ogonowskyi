import React, {FC} from 'react';
import {IuserModel} from "../../models/IuserModel";
import {useDispatch} from "react-redux";
import {usersActions} from "../../context/slices/usersSlice";


const UserComponent: FC<{ user: IuserModel }> = ({user}) => {
const dispatch = useDispatch()
    return (
        <div>
            <h1>{user.id}: {user.name} - {user.email}</h1>
            <button onClick={()=> {dispatch(usersActions.setfavorite(user))}}>add to favorite</button>


        </div>
    );
};

export default UserComponent;