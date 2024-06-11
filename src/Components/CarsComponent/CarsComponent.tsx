import React, {FC, useEffect, useState} from 'react';
import {ICarPaginated} from "../../Models/ICarPaginated";
import {carsApiService} from "../../services/cars.api.service";
import CarComponent from "../CarComponent/CarComponent";

const CarsComponent: FC = () => {

    const [carsResponse, setCarsResponse] = useState<ICarPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })

    useEffect(() => {
        carsApiService.getAllCars('1').then(value => setCarsResponse(value))
    }, []);

    return (
        <div>
            {
                carsResponse.items.map(car => <CarComponent car={car} key={car.id}/>)
            }
        </div>
    );
};

export default CarsComponent;