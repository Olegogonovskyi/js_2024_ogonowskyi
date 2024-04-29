import React, {FC, useEffect, useState} from 'react';
import IpostsProps from "../../models/PpostsProps";
import IPostModel from "../../models/postModel";
import getpostbyUser from "../../servises/posts.api";
import Post from "../Post/Post";
import Newhtwo from "../../hoc/newh2";

const Posts: FC<IpostsProps> = ({id}) => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        getpostbyUser(id).then(value => setPosts(value.data))
    }, [id])


    return (
        <div>
            {
                posts.map(({id, title, body}) => <Post key={id} id={id} title={title} body={body} />)
            }

        </div>
    );
};


export default Posts;


