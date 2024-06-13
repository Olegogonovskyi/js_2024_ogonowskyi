import React, {FC, useEffect} from 'react';
import SinglePostComponent from "../../Components/SinglePostComponent";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";
import {postsActions} from "../../redux/slices/postsSlice";

const SinglePostPage: FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postsActions.loadFavoriteUser(id))
    }, [id]);
    return (
        <div>
            <SinglePostComponent/>
        </div>
    );
};

export default SinglePostPage;