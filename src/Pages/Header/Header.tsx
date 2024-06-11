import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {urls} from "../../Constants/Urls";

const Header: FC = () => {
    return (
        <div>
            <NavLink to={'/'}>Main</NavLink>
            <br/>
            <NavLink to={'/'}>Login</NavLink>
            <br/>
            <NavLink to={urls.cars}>Cars</NavLink>
            <hr/>
        </div>
    );
};

export default Header;