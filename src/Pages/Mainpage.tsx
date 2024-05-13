import React, {FC} from 'react';
import {Link, Outlet} from "react-router-dom";

const Mainpage: FC = () => {
    console.log('Mainpage')
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Main Page</Link></li>
                <li><Link to={'/recepies'}>Recepies</Link></li>
                <li><Link to={'/cards'}>Cards</Link></li>
                <li><Link to={'/form'}>Forms</Link></li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default Mainpage;