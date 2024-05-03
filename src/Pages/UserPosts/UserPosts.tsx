import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import IPostmodel from "../../IPostmodel/IPostmodel";
import UserPost from "../UserPost/UserPost";

const UserPosts: FC = () => {
    const {state} = useLocation();
    console.log(state)
    const [posts, setPosts] = useState<IPostmodel[]>([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${state.id}`).then(value => value.json()).then(value => setPosts(value))
    }, [state]);


    return (
        <div>
            {
                posts.map(({id, title, body}) => <UserPost key={id} body={body} title={title} id={id} /> )
            }

        </div>
    );
};

export default UserPosts;