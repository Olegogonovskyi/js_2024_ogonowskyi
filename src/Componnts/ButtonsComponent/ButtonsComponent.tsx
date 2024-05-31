import React, {FC} from 'react';
import {IGetCarResponseModel} from "../../Models/IGetCarResponseModel";
interface IProps {
    setQwerty: any,
    prev: IGetCarResponseModel | null,
    next: IGetCarResponseModel | null
}

const ButtonsComponent: FC<IProps> = ({setQwerty, prev, next}) => {


    const setterPage = (page: string) => {
        switch (page) {
            case 'prev':
                setQwerty(prev);
                break;
            case 'next':
                setQwerty(next);
                break
        }
    }

    return (
        <div>
            <h1>ButtonComponent</h1>
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