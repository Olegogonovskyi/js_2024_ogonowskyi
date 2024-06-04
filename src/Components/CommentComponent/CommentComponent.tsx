import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

const CommentComponent: FC<{ comment: ICommentModel }> = ({comment}) => {
    return (
        <div>
            <h3>{comment.id}: {comment.name} from {comment.email} on postID {comment.postId}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentComponent;