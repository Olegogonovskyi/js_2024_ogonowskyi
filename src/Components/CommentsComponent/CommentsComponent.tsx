import React, {FC} from 'react';
import CommentComponent from "../CommentComponent/CommentComponent";
import {useAppSelector} from "../../context/Store";

const CommentsComponent: FC = () => {

    const {comments} = useAppSelector(state => state.comments)
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;