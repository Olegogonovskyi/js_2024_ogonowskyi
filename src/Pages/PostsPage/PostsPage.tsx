import React, {FC} from 'react';
import PostsComponent from "../../components/PostsComponent/PostsComponent";
import {Outlet} from "react-router-dom";

const PostsPage: FC = () => {
    return (
        <div>
            <PostsComponent/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;