import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUserJsonBaseModel} from "../../../models/modelsJson/IUserJsonBaseModel";
import {userJsonService} from "../../../servises/allServices";

const UserJsonDetailComponent: FC = () => {
    const {id} = useParams()
    const [user, setUser] = useState<IUserJsonBaseModel | null>(null)
    const {state} = useLocation()

    useEffect(() => {

        if(state) {
            setUser(state.user)
        } else if (id) {
            userJsonService.getUserbyIdJson(id).then(value => setUser(value.data))
        } else {
            throw new Error('ойойой')
        }


            }, [state, id]);
    return (
        <div>
            {user && <>{user.id}: {user.username} {user.name} - {user.email}</>}
        </div>
    );
};

export default UserJsonDetailComponent;