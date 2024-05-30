import React, {FC} from 'react';
import {ICarWithAuthModel} from "../../Models/ICarWithAuthModel/ICarWithAuthModel";

const CarComponent: FC<{ car: ICarWithAuthModel }> = ({car}) => {
    const {id, brand, price} = car
    return (
        <div>
            <h1>{id}: {brand} - {price}</h1>
        </div>
    );
};

export default CarComponent;