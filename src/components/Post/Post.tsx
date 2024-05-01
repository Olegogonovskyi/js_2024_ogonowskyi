import React, {FC} from 'react';
import IPostsmodel from "../../Models/IPostsmodel";

const Post:FC<IPostsmodel> = ({id, title, body}) => {
    return (
        <div>
            <li>{id}: {title}</li>
            <p>{body}</p>
        </div>
    );
};

export default Post;