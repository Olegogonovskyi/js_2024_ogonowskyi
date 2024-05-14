import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUsersDummyShort} from "../../models/DummyModels/IUsersDummyShort";

const UserDummyDetailComp: FC = () => {
    const {state} = useLocation()
    const [user, setUser] = useState<IUsersDummyShort>()
    useEffect(() => {
        setUser(state.user)

    }, [state]);


    return (
        <div>
            <h3>{user?.id}: {user?.firstName} {user?.lastName}</h3>
            <p>Age: {user?.age}, gender: {user?.gender}</p>
            <img src={user?.image} alt={`${user?.firstName} ${user?.lastName}`}/>
        </div>
    );
};

export default UserDummyDetailComp;