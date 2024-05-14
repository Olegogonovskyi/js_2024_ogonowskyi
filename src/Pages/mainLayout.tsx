import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const MainLayout:FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Main Page</NavLink></li>
                <li><NavLink to={'/users'}>Users</NavLink></li>
                <li><NavLink to={'/dummy-users'}>Users Dummy</NavLink></li>
                <li><NavLink to={'/formone'}>Form One</NavLink></li>

            </ul>

            <Outlet/>
        </div>
    );
};

export default MainLayout;