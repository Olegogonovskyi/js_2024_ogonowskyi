import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {carsUrls} from "../../costants/urls";

const Header: FC = () => {
    return (
        <div>
            <NavLink to={'/'} >Main</NavLink>
            <NavLink to={carsUrls.getAll} >Cars</NavLink>
        </div>
    );
};

export default Header;