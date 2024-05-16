import React, {FC} from 'react';
import {ICommentsbasicModel} from "../../models/IcommentsbasicModel";

const CommentComponent: FC<{ comment: ICommentsbasicModel }> = ({comment}) => {
    return (
        <div>
            <hr/>
            <p>comment to postID: {comment.postId}</p>
            <p>comment id: {comment.id} from {comment.email}</p>
            <h3>{comment.name}</h3>
            <h2>{comment.body}</h2>
            <hr/>
        </div>
    );
};

export default CommentComponent;