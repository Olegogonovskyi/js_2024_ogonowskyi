import React, {FC, useState} from 'react';
import './App.css';
import Cardscomp from "./Components/Cards comp/Cardscomp";
import Productscomp from "./Components/Products comp/Productscomp";
import {ISingleCartProductsWrap} from "./models/ISingleCartProductsWrap";


const App: FC = () => {
    const [singlecard, setsinglecard] = useState<ISingleCartProductsWrap | undefined>(undefined)
    const choseProducts = (choseProducts: ISingleCartProductsWrap) => {
        setsinglecard(choseProducts)
    }

    return (
        <div>
            <Cardscomp choseProducts={choseProducts}/>
            <Productscomp products={singlecard}/>

        </div>
    );
};

export default App;

