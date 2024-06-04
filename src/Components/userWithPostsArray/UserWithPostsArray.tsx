import React, {FC} from 'react';
import {usersWithPosts} from "../UsersPostaComponent/UsersPostaComponent";
import PostComponent from "../PostComponent/PostComponent";

const UserWithPostsArray: FC<{ userWithPosts: usersWithPosts }> = ({userWithPosts}) => {
    const {id, name, email, posts} = userWithPosts
    return (
        <div>
            <h1>{id}: {name} - {email} </h1>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserWithPostsArray;