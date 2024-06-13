import React, {FC, useEffect} from 'react';
import PostsComponent from "../../Components/PostsComponent/PostsComponent";
import {useAppDispatch} from "../../redux/store";
import {postsActions} from "../../redux/slices/postsSlice";

const PostsPage: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(postsActions.loadPosts())
    }, []);
    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;