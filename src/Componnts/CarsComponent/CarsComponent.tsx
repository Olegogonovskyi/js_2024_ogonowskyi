import React, {FC, useEffect, useState} from 'react';
import {ICarWithAuthModel} from "../../Models/ICarWithAuthModel/ICarWithAuthModel";
import {carsService} from "../../Services/carsService";
import CarComponent from "../CarComponent/CarComponent";

const CarsComponent: FC = () => {
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
        carsService.getAllCars().then(value => {
            if (value)
                setCars(value.items)
        })
    }, []);
    return (
        <div>
            {
                cars.map((car, index) => <CarComponent car={car} key={index}/>)
            }
        </div>
    );
};

export default CarsComponent;