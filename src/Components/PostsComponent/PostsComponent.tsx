import React, {FC, useContext} from 'react';
import {Context} from "../../context/ContextProvider";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent: FC = () => {
    const {postsStore: {
        allPosts
    }} = useContext(Context)
    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;