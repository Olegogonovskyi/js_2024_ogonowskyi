import React, {FC} from 'react';
import HeaderPage from "../HeaderPage/HeaderPage";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;