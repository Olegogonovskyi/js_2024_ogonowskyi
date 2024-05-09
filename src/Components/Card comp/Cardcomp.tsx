import React, {FC} from 'react';
import {ICardProps} from "../../models/ICardmodelwrap";


const Cardcomp:FC<ICardProps> = ({card, choseProducts}) => {
    return (
        <div>
            <h2>{card.id}: summary: {card.total} total products - {card.totalProducts}</h2>
            <button onClick={() => choseProducts(card.id)}> see products </button>
        </div>
    );
};

export default Cardcomp;