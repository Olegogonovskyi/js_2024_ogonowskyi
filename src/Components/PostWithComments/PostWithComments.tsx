import React, {FC} from 'react';
import {PostWithCommentsType} from "../PostComentsComponent/PostComentsComponent";
import CommentComponent from "../CommentComponent/CommentComponent";

const PostWithComments: FC<{ postWithComments: PostWithCommentsType }> = ({postWithComments}) => {
    const {userId, body, comments, title, id} = postWithComments
    return (
        <div>
            <h1>{id}: {title} from {userId}</h1>
            <p>{body}</p>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default PostWithComments;