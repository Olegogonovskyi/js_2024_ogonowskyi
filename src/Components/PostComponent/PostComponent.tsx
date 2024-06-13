import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {useNavigate} from "react-router-dom";

const PostComponent: FC<{ post: IPostModel }> = ({post}) => {
    const navigate = useNavigate()
    const {id, title, body} = post
    return (
        <div>
            <h1>{id}: {title}</h1>
            <p>{body}</p>
            <button onClick={() => navigate(`${id}`)}>Кніпка</button>
        </div>
    );
};

export default PostComponent;