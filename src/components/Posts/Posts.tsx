import React, {FC, useEffect, useState} from 'react';
import {Iuserpost} from "../../models/allmodels";
import {getPostbyuser} from "../../services/posts.api";
import Post from "../Post/Post";

const Posts:FC<number> = (userid) => {
    const [posts, setPosts] = useState<Iuserpost[]>([])
    useEffect(() => {
        getPostbyuser(userid)
            .then(value => setPosts(value.data))
    }, [])

    return (
        <div>
            {
                posts.map(({title, body}, index) => <Post key = {index} title={title} body={body} />)
            }
        </div>
    );
};

export default Posts;