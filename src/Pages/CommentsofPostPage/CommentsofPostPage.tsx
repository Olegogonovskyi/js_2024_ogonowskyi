import React, {FC} from 'react';
import CommentsofPostComponent from "../../components/CommentsofPostComponent/CommentsofPostComponent";
import {WithAxiosGetChildrenByItems} from "../../hoc/WithAxiosGetPostsByUser";
import axiosService from "../../services/axios.api.service";
import {ICommentsbasicModel} from "../../models/IcommentsbasicModel";
import {Outlet} from "react-router-dom";

const CommentsofPostPage: FC<{ items: ICommentsbasicModel[] }> = ({items}) => {
    console.log(items)
    return (
        <div>
            <CommentsofPostComponent comments={items}/>

        </div>
    );
};

export default WithAxiosGetChildrenByItems(CommentsofPostPage, axiosService.getCommentsByPostId);