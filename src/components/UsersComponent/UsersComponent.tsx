import React, {FC} from 'react';
import {WithAxiosGetAll} from "../../hoc/WithAxiosGetAll";
import axiosService from "../../services/axios.api.service";
import {IUserbasicmodel} from "../../models/IUserbasicmodel";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent: FC<{ items: IUserbasicmodel [] }> = ({items}) => {
    return (
        <div>
            {items && items.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default WithAxiosGetAll(UsersComponent, axiosService.getAllUsers);