import React, {FC} from 'react';

import CommentComponent from "../CommentComponent/CommentComponent";
import {useSelector} from "react-redux";
import {RootState} from "../../context/Store";

const CommentsComponent: FC = () => {

    const {comments} = useSelector((state: RootState) => state.comments)
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;