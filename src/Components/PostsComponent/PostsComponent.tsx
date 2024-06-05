import React, {FC} from 'react';
import {useStore} from "../../context/Store";
import PostComponent from "../PostComponent/PostComponent";

const PostsComponent: FC = () => {
    const {
        postsStore: {
            allPosts
        }
    } = useStore()
    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;