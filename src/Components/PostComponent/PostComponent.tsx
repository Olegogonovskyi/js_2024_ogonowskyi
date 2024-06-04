import React, {FC, useContext} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {Context} from "../../context/ContextProvider";

const PostComponent: FC<{ post: IPostModel }> = ({post}) => {
    const {postsStore: {setFavoritePost}} = useContext(Context)
    return (
        <div>
            <h2>{post.id}: {post.title} from {post.userId}</h2>
            <p>{post.body}</p>
            <button onClick={()=> setFavoritePost(post)}>favorite</button>
        </div>
    );
};

export default PostComponent;