import React, {FC} from 'react';
import {Link, Outlet} from "react-router-dom";

const Mainpage:FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Main</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>

            </ul>

            <Outlet/>
        </div>
    );
};

export default Mainpage;