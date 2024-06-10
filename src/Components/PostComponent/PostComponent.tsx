import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
import {postsActions} from "../../context/slices/postsSlice";
import {useAppDispatch} from "../../context/Store";


const PostComponent: FC<{ post: IPostModel }> = ({post}) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2>{post.id}: {post.title} from {post.userId}</h2>
            <p>{post.body}</p>
            <button onClick={() => {
                dispatch(postsActions.setFavoritePost(post))
            }}>set favorite
            </button>

        </div>
    );
};

export default PostComponent;