import React, {FC} from 'react';
import IPostmodel from "../../../IPostmodel/IPostmodel";

const Post:FC<IPostmodel> = ({id, title, body}) => {
    return (
        <div>
            <p>{id}: {title}</p>
            <li>{body}</li>
        </div>
    );
};

export default Post;