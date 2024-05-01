import React, {FC} from 'react';
import './App.css';

import {Link, Outlet} from "react-router-dom";


const App: FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}> App </Link></li>
                <li><Link to={'users'}> Users </Link></li>
                <li><Link to={'products'}> Products </Link></li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default App;

