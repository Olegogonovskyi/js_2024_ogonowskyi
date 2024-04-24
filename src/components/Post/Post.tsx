import React, {FC} from 'react';
import {Iuserpost} from "../../models/allmodels";

type Ipostwithchildren<T> = T & {children?: React.ReactNode}
const Post:FC<Ipostwithchildren<Iuserpost>> = ({title, body}) => {
    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default Post;