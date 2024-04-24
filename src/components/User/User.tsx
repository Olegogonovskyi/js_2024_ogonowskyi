import React, {FC} from 'react';
import  styles from './User.module.css'
import IUser from "../../models/IUser";

type IUserwithchildren<T> = T & {children?: React.ReactNode}
const User:FC<IUserwithchildren<IUser>> = ({id, name}) => {


    return (
        <div>
            <div className={styles.teststyle}>{id} -- {name}</div>

        </div>
    );
};

export default User;