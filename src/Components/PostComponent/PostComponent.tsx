import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useStore} from "../../context/Store";

const PostComponent: FC<{ post: IPostModel }> = ({post}) => {
    const {postsStore: {setFavoritePost}} = useStore()
    return (
        <div>
            <h2>{post.id}: {post.title} from {post.userId}</h2>
            <p>{post.body}</p>
            <button onClick={()=> setFavoritePost(post)}>favorite</button>
        </div>
    );
};

export default PostComponent;