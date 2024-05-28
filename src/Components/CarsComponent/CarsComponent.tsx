import React, {FC, useEffect, useState} from 'react';
import {carsService} from "../../services/carsService";
import {ICarWithAuth} from "../../models/ICarWithAuth";
import CarComponent from "../CarComponent/CarComponent";

const CarsComponent:FC = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>()

    useEffect(() => {
        carsService.getCars().then(value => setCars(value.items))
    }, []);
    return (
        <div>
            {
                cars && cars.map((car, index) => <CarComponent car={car} key={index}/> )
            }
        </div>
    );
};

export default CarsComponent;