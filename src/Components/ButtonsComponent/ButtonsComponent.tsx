import React, {FC} from 'react';
import {ICarResponseModel} from "../../Models/ICarResponseModel";

type IProps = {
    setQwerty: any,
    prev: ICarResponseModel | null,
    next: ICarResponseModel | null
}
const ButtonsComponent: FC<IProps> = ({setQwerty, next, prev}) => {
    const buttonPaginate = (page: string) => {
        switch (page) {
            case 'prev':
                setQwerty(prev)
                break;
            case 'next':
                setQwerty(next)
                break
        }
    }
    return (
        <div>
            <button disabled={!prev} onClick={() => buttonPaginate('prev')}>prev</button>
            <button disabled={!next} onClick={() => buttonPaginate('next')}>next</button>
        </div>
    );
};

export default ButtonsComponent;