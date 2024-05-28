import React, {FC, useEffect} from 'react';
import {carsService} from "../../services/carsService";

const CarsComponent:FC = () => {

    useEffect(() => {
        carsService.getCars().then(value => console.log(value))
    }, []);
    return (
        <div>
fff
        </div>
    );
};

export default CarsComponent;