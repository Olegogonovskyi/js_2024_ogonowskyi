import React, {FC} from 'react';
import {IPostbasicModel} from "../../models/IPostbasicModel";

const PostComponent: FC<{post: IPostbasicModel}> = ({post}) => {
    return (
        <div>
            <hr/>
            <h1>{post.id} - {post.title}</h1>
            <h3>From: {post.userId}</h3>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;