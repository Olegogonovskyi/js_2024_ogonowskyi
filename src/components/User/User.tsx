import React, {FC} from 'react';
import IUsermodel from "../../models/IUsermodel";

const User: FC<IUsermodel> = ({id, firstName, lastName, age, gender, city, image}) => {
    return (
        <div>
            <h1>Prisioner number: {id} - {firstName} {lastName} {age} {gender} {city}</h1>
            <img src={image} alt={firstName}/>
        </div>
    );
};

export default User;