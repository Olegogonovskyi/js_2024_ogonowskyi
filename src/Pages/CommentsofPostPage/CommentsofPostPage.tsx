import React, {FC} from 'react';
import CommentsofPostComponent from "../../components/CommentsofPostComponent/CommentsofPostComponent";
import {WithAxiosGetChildrenByItems} from "../../hoc/WithAxiosGetChildrenByItems";
import axiosService from "../../services/axios.api.service";
import {ICommentsbasicModel} from "../../models/IcommentsbasicModel";


const CommentsofPostPage: FC<{ items: ICommentsbasicModel[] }> = ({items}) => {
    return (
        <div>
            <CommentsofPostComponent comments={items}/>

        </div>
    );
};

export default WithAxiosGetChildrenByItems(CommentsofPostPage, axiosService.getCommentsByPostId);