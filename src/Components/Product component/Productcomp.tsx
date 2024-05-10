import React, {FC} from 'react';
import {ISingleCartProducts} from "../../models/ISingleCartProducts";

const Productcomp: FC<ISingleCartProducts> = ({id, quantity, price, title, total, thumbnail}) => {
    console.log('Productcomp')
    return (
        <div>

            <h4>{id}: {title} - {quantity} * {price} &#36; is {total}</h4>
            <img src={thumbnail} alt={title}/>


        </div>
    );
};

export default Productcomp;