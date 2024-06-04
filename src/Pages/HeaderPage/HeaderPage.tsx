import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {urls} from "../../costants/urls";

const HeaderPage: FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Main</NavLink></li>
                <li><NavLink to={urls.users}>Users</NavLink></li>
                <li><NavLink to={urls.posts}>Posts</NavLink></li>
                <li>
                    <ul>
                        <li><NavLink to={urls.usersPosts}>Users posts</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to={urls.comments}>Comments</NavLink></li>
                <li>
                    <ul>
                        <li><NavLink to={urls.postsComments}>Posts comments</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default HeaderPage;