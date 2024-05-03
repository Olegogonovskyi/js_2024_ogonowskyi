import React, {FC} from 'react';
import IPostmodel from "../../IPostmodel/IPostmodel";

const UserPost: FC<IPostmodel> = ({id, body, title}) => {
    return (
        <div>
            <h5>{id} {title}: {body}</h5>
        </div>
    );
};

export default UserPost;