import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {urls} from "../../costants/urls";

const Header: FC = () => {
    return (
        <div>
            <NavLink to={'/'}>Main</NavLink>
            <br/>
            <NavLink to={urls.usersUrls.users}>Users</NavLink>
            <br/>
            <NavLink to={urls.postUrls.posts}>Posts</NavLink>
            <hr/>
        </div>
    );
};

export default Header;