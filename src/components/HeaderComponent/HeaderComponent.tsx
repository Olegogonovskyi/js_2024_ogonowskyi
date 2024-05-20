import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent: FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Home Page</NavLink></li>
                <li><NavLink to={'users'}>Users Page</NavLink></li>
                <li><NavLink to={'posts'}>Posts Page</NavLink></li>
                <li><NavLink to={'comments'}>Comments Page</NavLink></li>
                <li><NavLink to={'prowtest'}>Prowide</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;