import React, {FC, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings";



const UserComponent: FC<{ user: IUserModel }> = ({user}) => {
   const rating = 3.45
    const {id, name} = user
    const navigate = useNavigate()
    return (
        <div>

            <h1>{id}: {name}</h1>
            <button onClick={() => navigate(`${id}`)}>Кніпка</button>
            <StarRatings
                rating={rating}
                starRatedColor="blue"

                numberOfStars={5}
                name='rating'
            />
        </div>
    );
};

export default UserComponent;