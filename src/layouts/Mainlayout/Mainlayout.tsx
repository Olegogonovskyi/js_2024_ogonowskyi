import React, {FC} from 'react';
import Header from "../../Pages/header/Header";
import {Outlet} from "react-router-dom";

const Mainlayout:FC = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Mainlayout;