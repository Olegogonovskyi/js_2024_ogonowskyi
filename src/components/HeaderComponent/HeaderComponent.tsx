import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent:FC = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Home Page</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;