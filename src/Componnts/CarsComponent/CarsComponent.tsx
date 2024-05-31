import React, {FC, useEffect, useState} from 'react';
import {carsService} from "../../Services/carsService";
import CarComponent from "../CarComponent/CarComponent";
import {useSearchParams} from "react-router-dom";
import {ICarPaginatedModel} from "../../Models/ICarPaginatedModel";
import ButtonsComponent from "../ButtonsComponent/ButtonsComponent";

const CarsComponent: FC = () => {
    const [carsResp, setCarsResp] = useState<ICarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })
    const [qwerty, setQwerty] = useSearchParams({page: '1'})
    useEffect(() => {
        carsService.getAllCars(qwerty.get('page') || '1').then(value => {
            if (value)
                setCarsResp(value)
        })
    }, [qwerty]);
    const setterPage = (page: string) => {
        switch (page) {
            case 'prev':
                setQwerty({...carsResp.prev});
                break;
            case 'next':
                setQwerty({...carsResp.next});
                break
        }
    }

    return (
        <div>
            {
                carsResp.items.map((car, index) => <CarComponent car={car} key={index}/>)
            }
            <ButtonsComponent setterPage={setterPage}  key={1}/>
        </div>
    );
};

export default CarsComponent;