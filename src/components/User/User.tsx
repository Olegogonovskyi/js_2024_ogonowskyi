import React, {FC} from 'react';
import  styles from './User.module.css'
import {IUser, UserProps} from "../../models/allmodels";

type IUserwithchildren<T> = T & {children?: React.ReactNode} & UserProps
const User:FC<IUserwithchildren<IUser>> = ({id, name, clikker}) => {


    return (
        <div>
            <div className={styles.teststyle}>{id} -- {name}
            <button onClick={() => {clikker(id)}}> click </button>
            </div>

        </div>
    );
};

export default User;