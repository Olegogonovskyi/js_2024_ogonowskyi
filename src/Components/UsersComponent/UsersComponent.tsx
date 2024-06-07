import React, {FC, useEffect} from 'react';

import UserComponent from "../UserComponent/UserComponent";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../context/rtkStore";
import {getAllUsers} from "../../context/slices/usersSlice";

const UsersComponent: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const allUsers = useSelector((state: RootState) => state.users.items )
    const status = useSelector((state: RootState) => state.users.status);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getAllUsers());
        }
    }, [status, dispatch]);
    console.log(allUsers)
    return (
        <div>
            {

                allUsers.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;