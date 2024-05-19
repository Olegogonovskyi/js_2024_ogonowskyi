import React, {FC} from 'react';
import {ICommentsbasicModel} from "../../models/IcommentsbasicModel";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsofPostComponent: FC<{ comments: ICommentsbasicModel[] }> = ({comments}) => {
    return (
        <div>
            {
                comments && comments
                    .map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsofPostComponent;