import React, {FC} from 'react';
import {ICommentsbasicModel} from "../../models/IcommentsbasicModel";
import {WithAxiosGetAll} from "../../hoc/WithAxiosGetAll";
import axiosService from "../../services/axios.api.service";
import CommentComponent from "../CommentComponent/CommentComponent";


const CommentsComponent: FC<{ items: ICommentsbasicModel[] }> = ({items}) => {
    return (
        <div>
            {items && items.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default WithAxiosGetAll(CommentsComponent, axiosService.getAllComments);