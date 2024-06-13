import React, {FC, useEffect} from 'react';
import UsersComponent from "../../Components/UsersComponent/UsersComponent";
import {useAppDispatch} from "../../redux/store";
import {userActions} from "../../redux/slices/usersSlice";

const UsersPage: FC = () => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userActions.usersLoading())
    }, []);
    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;