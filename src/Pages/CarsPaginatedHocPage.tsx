import React, {FC} from 'react';
import {WithPagination} from "../hoc/WithPagination";
import {carsService} from "../Services/carsService";
import CarComponent from "../Componnts/CarComponent/CarComponent";
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";

const CarsPaginatedHocPage: FC<ICarPaginatedModel> = ({items}) => {
    return (
        <div>
            {
                items && items.map((car, index) => <CarComponent car={car} key={index}/>)
            }
        </div>
    );
};

export default WithPagination(CarsPaginatedHocPage, carsService.getAllCars);