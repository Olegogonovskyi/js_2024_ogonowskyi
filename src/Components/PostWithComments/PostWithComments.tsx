import React, {FC} from 'react';
import {PostWithCommentsType} from "../PostComentsComponent/PostComentsComponent";
import CommentComponent from "../CommentComponent/CommentComponent";

const PostWithComments: FC<{PostWithComments: PostWithCommentsType}> = ({PostWithComments}) => {
    const {userId, body, comments, title, id} = PostWithComments
    return (
        <div>
            <h1>{id}: {title} from {userId}</h1>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default PostWithComments;