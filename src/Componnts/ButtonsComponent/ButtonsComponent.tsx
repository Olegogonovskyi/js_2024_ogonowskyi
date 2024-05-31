import React, {FC} from 'react';
import {IGetCarResponseModel} from "../../Models/IGetCarResponseModel";
interface IProps {
    setterPage: (page: string)=> void,
    prev: IGetCarResponseModel | null,
    next: IGetCarResponseModel | null
}

const ButtonsComponent: FC<IProps> = ({setterPage, prev, next}) => {
    return (
        <div>
            <button disabled={!prev} onClick={()=> {
                setterPage('prev')
            }}>prev</button>
            <button disabled={!next} onClick={()=> {
                setterPage('next')
            }}>next</button>

        </div>
    );
};

export default ButtonsComponent;