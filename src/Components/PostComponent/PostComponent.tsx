import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";


const PostComponent: FC<{ post: IPostModel }> = ({post}) => {

    return (
        <div>
            <h2>{post.id}: {post.title} from {post.userId}</h2>
            <p>{post.body}</p>

        </div>
    );
};

export default PostComponent;