import React, {FC} from 'react';
import {ICarPaginatedModel} from "../../Models/ICarPaginatedModel";
import CarComponent from "../CarComponent/CarComponent";
import {WithPagination} from "../../hoc/WithPagination";
import {carsService} from "../../Services/carsService";

const CarsPaginatedHocComponent: FC<ICarPaginatedModel> = ({items}) => {
    return (
        <div>
            {
                items && items.map((car, index) => <CarComponent car={car} key={index}/>)
            }
        </div>
    );
};

export default WithPagination(CarsPaginatedHocComponent, carsService.getAllCars);