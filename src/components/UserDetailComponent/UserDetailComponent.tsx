
import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUserbasicmodel} from "../../models/IUserbasicmodel";

const UserDetailComponent: FC = () => {
    const {state} = useLocation()
    const [user, setUser] = useState<IUserbasicmodel| null>(null)


        useEffect(() => {
            if (state) {
                setUser(state.user)
            }

        }, [state]);


    return (
        <div>
            {
                user && <h2>{user.email}</h2>
            }
        </div>
    );
};

export default UserDetailComponent;