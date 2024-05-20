import React, {FC} from 'react';
import UserPostsComponent from "../../components/UserPostsComponent/UserPostsComponent";
import axiosService from "../../services/axios.api.service";
import {WithAxiosGetChildrenByItems} from "../../hoc/WithAxiosGetChildrenByItems";
import {IPostbasicModel} from "../../models/IPostbasicModel";

const UserPosts: FC<{ items: IPostbasicModel[] }> = ({items}) => {
    return (
        <div>
            <UserPostsComponent posts={items}/>
        </div>
    );
};

export default WithAxiosGetChildrenByItems(UserPosts, axiosService.getPostByUserId);