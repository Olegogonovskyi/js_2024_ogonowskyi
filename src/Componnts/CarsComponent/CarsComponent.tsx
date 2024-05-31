import React, {FC, useEffect, useState} from 'react';
import {ICarWithAuthModel} from "../../Models/ICarWithAuthModel/ICarWithAuthModel";
import {carsService} from "../../Services/carsService";
import CarComponent from "../CarComponent/CarComponent";
import {useParams} from "react-router-dom";

const CarsComponent: FC = () => {
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    const[qwerty, setqwerty] = useParams() // todo 1. змінити юсстейт, задіяти юспарамс, додати компоненту з кнопками
    useEffect(() => {
        carsService.getAllCars('1').then(value => {
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