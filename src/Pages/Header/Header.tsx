import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {urls} from "../../Constants/Urls";
import {useAppSelector} from "../../redux/store";

const Header: FC = () => {

    const {currentUser} = useAppSelector(state => state.authReducer)
    return (
        <div>
            {currentUser ?
                <h1>{currentUser.username} -- {currentUser.created}</h1> :
                <div><NavLink to={'/'}>Main</NavLink>
                <br/>
                <NavLink to={'/'}>Login</NavLink>
                <br/>
                <NavLink to={urls.cars}>Cars</NavLink>
                <hr/>
            </div>}

        </div>
    );
};

export default Header;