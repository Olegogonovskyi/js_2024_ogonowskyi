import React, {FC, useEffect, useState} from 'react';
import IPostsprops from "../../Models/IPostsprops";
import IPostsmodel from "../../Models/IPostsmodel";
import {getpostofuser} from "../../services/dummy.api.service";
import Post from "../Post/Post";


const Posts:FC<IPostsprops> = ({userid}) => {
    const [posts, setPosts] = useState<IPostsmodel[]>([])
    useEffect(() => {
        getpostofuser(userid).then(value => setPosts(value.data.posts))
    }, [userid]);

    return (
        <div>
            {
                posts.map(({id, title, body}) => <Post key={id} id={id} title={title} body={body} />)
            }
        </div>
    );
};

export default Posts;