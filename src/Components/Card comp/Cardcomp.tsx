import React, {FC} from 'react';
import {ICardProps} from "../../models/ICardmodelwrap";
import {ISingleCartProductsWrap} from "../../models/ISingleCartProductsWrap";

type IcardPropss<T> = T & {choseProducts: (products:ISingleCartProductsWrap) => void}
const Cardcomp:FC<IcardPropss<ICardProps>> = ({card, choseProducts}) => {
    return (
        <div>
            <h2>{card.id}: summary: {card.total} total products - {card.totalProducts}</h2>
            <button onClick={() => choseProducts(card.products)}> see products </button>
        </div>
    );
};

export default Cardcomp;