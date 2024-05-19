import React, {FC} from 'react';
import {IPostbasicModel} from "../../models/IPostbasicModel";
import {WithAxiosGetAll} from "../../hoc/WithAxiosGetAll";
import axiosService from "../../services/axios.api.service";
import PostComponent from "../PostComponent/PostComponent";


const PostsComponent: FC<{ items: IPostbasicModel[] }> = ({items}) => {
    return (
        <div>
            {items && items.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default WithAxiosGetAll(PostsComponent, axiosService.getAllPosts);