import React, {FC} from 'react';
import {RootState} from "../../context/Store";
import PostComponent from "../PostComponent/PostComponent";
import {useSelector} from "react-redux";

const PostsComponent: FC = () => {
    const {posts} = useSelector((state: RootState) => state.posts)
    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;