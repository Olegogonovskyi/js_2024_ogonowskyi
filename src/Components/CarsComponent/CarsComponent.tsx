import React, {FC, useEffect, useState} from 'react';
import {ICarPaginated} from "../../Models/ICarPaginated";
import {carsApiService} from "../../services/cars.api.service";
import CarComponent from "../CarComponent/CarComponent";
import ButtonsComponent from "../ButtonsComponent/ButtonsComponent";
import {useSearchParams} from "react-router-dom";

const CarsComponent: FC = () => {
const [qwerty, setQwerty] = useSearchParams({page: '1'})
    const [carsResponse, setCarsResponse] = useState<ICarPaginated>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })

    useEffect(() => {
        carsApiService.getAllCars(qwerty.get('page') || '1').then(value => setCarsResponse(value))
    }, [qwerty]);

    return (
        <div>
            {
                carsResponse.items.map(car => <CarComponent car={car} key={car.id}/>)
            }
            <ButtonsComponent prev = {carsResponse.prev} next = {carsResponse.next} setQwerty={setQwerty} key={1}/>
        </div>
    );
};

export default CarsComponent;