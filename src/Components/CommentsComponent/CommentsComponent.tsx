import React, {FC, useContext} from 'react';
import {Context} from "../../context/ContextProvider";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent: FC = () => {

    const {
        commetsStore: {
            allComments
        }
    } = useContext(Context)
    return (
        <div>
            {
                allComments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;