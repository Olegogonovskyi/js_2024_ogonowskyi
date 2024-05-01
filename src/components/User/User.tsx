import React, {FC} from 'react';
import IUsersmodel from "../../Models/IUsersmodel";
import Iliftuserid from "../../Models/Iliftuserid";
import styles from "./User.module.css"

type IUserprops = IUsersmodel & Iliftuserid
const User: FC<IUserprops> = ({id, address, age, gender, image, lastName, firstName, lift}) => {
    return (
        <div className={styles.mainblock}>
            <hr/>
            <h3>{id}: {firstName} {lastName} {age} {gender} {address.city}</h3>
            <img src={image} alt= {`${firstName} ${lastName}`} />
            <button onClick={() => lift(id)} >what {firstName} {lastName} say?</button>
            <hr/>
        </div>
    );
};

export default User;