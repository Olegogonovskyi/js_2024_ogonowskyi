import React, {FC, useEffect, useState} from 'react';
import IUsersmodel from "../../IUsersmodel/IUsersmodel";
import Post from "./Post/Post";
import IPostmodel from "../../IPostmodel/IPostmodel";

const Posts:FC = () => {
    const [posts, setposts] = useState<IPostmodel[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(value => setposts(value))
    }, []);

    return (
        <div>
            {
                posts.map(({body, id, title}) => <Post key={id} id={id} body={body} title={title} />)
            }

        </div>
    );
};

export default Posts;