import React, {FC, useEffect, useState} from 'react';
import {ICardmodelbase} from "../../models/ICardmodelbase";
import {getAllCards} from "../../servises/axios.api.servise";
import Cardcomp from "../Card comp/Cardcomp";
import {ISingleCartProducts} from "../../models/ISingleCartProducts";


interface ICardsProps {
    choseProducts: (choseProducts: ISingleCartProducts[]) => void
}

const Cardscomp: FC<ICardsProps> = ({choseProducts}) => {
    const [cards, setCards] = useState<ICardmodelbase[]>([])
    useEffect(() => {
        getAllCards().then(({data}) => setCards(data.carts))
    }, []);


    return (
        <div>
            {
                cards.map((card, index) => <Cardcomp key={index} card={card} choseProducts={choseProducts}/>)
            }
        </div>
    );
};

export default Cardscomp;