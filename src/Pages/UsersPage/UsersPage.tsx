import React, {FC} from 'react';
import UsersComponent from "../../components/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage:FC = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
            <hr/>
        </div>
    );
};

export default UsersPage;