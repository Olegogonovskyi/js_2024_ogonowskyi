import React, {FC} from 'react';
import {useAppSelector} from "../redux/store";


const SingleUserComponent: FC = () => {
    const {favoriteUser} = useAppSelector(state => state.userReducer)
    return (
        <div>
            <hr/>
            {
                favoriteUser && <h1>{favoriteUser.email}</h1>
            }
            <hr/>
        </div>
    );
};

export default SingleUserComponent;