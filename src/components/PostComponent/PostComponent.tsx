import React, {FC} from 'react';
import {IPostbasicModel} from "../../models/IPostbasicModel";
import {useNavigate} from "react-router-dom";

const PostComponent: FC<{ post: IPostbasicModel }> = ({post}) => {
    const navigate = useNavigate()
    const PostIdHendler = () => {
        navigate(post.id.toString() + '/comments', {state: post.id})
    }
    return (
        <div>
            <hr/>
            <h1>{post.id} - {post.title}</h1>
            <h3>From: {post.userId}</h3>
            <p>{post.body}</p>
            <button onClick={PostIdHendler}>Show Comments</button>
            <hr/>
        </div>
    );
};

export default PostComponent;