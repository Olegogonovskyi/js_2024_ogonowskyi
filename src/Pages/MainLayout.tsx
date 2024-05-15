import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Main</NavLink></li>
                <li><NavLink to={'/usersjson'}>Users Json</NavLink></li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default MainLayout;