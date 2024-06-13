import React, {FC} from 'react';
import {useAppSelector} from "../../redux/store";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent: FC = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postsReducer)
    return (
        <div>
            {
                isLoaded ? posts.map(post => <PostComponent post={post} key={post.id}/>) :
                    <h1>Load Posts</h1>
            }
        </div>
    );
};

export default PostsComponent;