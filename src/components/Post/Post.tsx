import React, {FC} from 'react';
import IPostModel from "../../models/postModel";

const Post:FC<IPostModel> = ({id, title, body}) => {
    return (
        <div>
            <h5>{id}: {title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post