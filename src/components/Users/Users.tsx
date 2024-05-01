import React, {FC, useEffect, useState} from 'react';
import IUsersmodel from "../../Models/IUsersmodel";
import {getallusers} from "../../services/dummy.api.service";
import User from "../User/User";
import Posts from "../Posts/Posts";
import styles from "./Users.module.css"

const Users: FC = () => {

    const [userid, setUserid] = useState<number>(0)
    const lift = (id:number) => {
        setUserid(id)
    }

    const [users, setUsers] = useState<IUsersmodel[]>([])
    useEffect(() => {
        getallusers().then(value => setUsers(value.data.users))
    }, []);

    return (
        <div className={styles.flexblocks}>
            <div className={styles.widthblock}>{
                users.map(({id, firstName, lastName, age, gender, address, image}) => <User key={id} id={id}
                                                                                            image={image} lift={lift}
                                                                                            firstName={firstName}
                                                                                            age={age}
                                                                                            lastName={lastName}
                                                                                            gender={gender}
                                                                                            address={address}/>)
            }</div>
            {userid !== 0 && <div className={styles.widthblock}><Posts userid={userid} /></div>}
        </div>
    );
};

export default Users;