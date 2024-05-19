import React, {FC} from 'react';
import {IPostbasicModel} from "../../models/IPostbasicModel";
import UserPostComponent from "../UserPostComponent/UserPostComponent";

const UserPostsComponent: FC<{ posts: IPostbasicModel[] }> = ({posts}) => {

    return (
        <div>
            {
                posts && posts
                    .map(post => <UserPostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserPostsComponent;