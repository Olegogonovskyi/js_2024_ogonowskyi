import React, {FC} from 'react';
import {useStore} from "../../context/Store";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent: FC = () => {

    const {
        commentsStore: {
            allComments
        }
    } = useStore()
    return (
        <div>
            {
                allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;