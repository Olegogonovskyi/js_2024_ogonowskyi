import React, {FC} from 'react';
import {ISingleCartProductsWrap} from "../../models/ISingleCartProductsWrap";
import Productcomp from "../Product component/Productcomp";

const Productscomp: FC<ISingleCartProductsWrap> = ({products}) => {

    return (
        <div>
            {
                products.map(product => <Productcomp key={product.id} total={product.total} id={product.id}
                                                     title={product.title} quantity={product.quantity}
                                                     price={product.price} thumbnail={product.thumbnail}/>)
            }

        </div>
    );
};

export default Productscomp;