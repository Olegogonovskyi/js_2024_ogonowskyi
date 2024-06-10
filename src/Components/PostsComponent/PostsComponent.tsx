import React, {FC} from 'react';
import {useAppSelector} from "../../context/Store";
import PostComponent from "../PostComponent/PostComponent";


const PostsComponent: FC = () => {
    const {posts} = useAppSelector(state => state.posts)
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;