import React, {FC, useEffect} from 'react';
import SingleUserComponent from "../../Components/SingleUserComponent";
import {useAppDispatch} from "../../redux/store";
import {useParams} from "react-router-dom";
import {userActions} from "../../redux/slices/usersSlice";

const SingleUserPage: FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(userActions.userByIdLoading(id))
    }, [id]);
    return (
        <div>
            <SingleUserComponent/>
        </div>
    );
};

export default SingleUserPage;