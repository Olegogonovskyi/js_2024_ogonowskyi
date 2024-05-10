import React, {FC, useState} from 'react';
import './App.css';
import Cardscomp from "./Components/Cards comp/Cardscomp";
import {ISingleCartProducts} from "./models/ISingleCartProducts";
import Productscomp from "./Components/Products comp/Productscomp";


const App: FC = () => {
    const [singlecard, setsinglecard] = useState<ISingleCartProducts[]>([])
    const choseProducts = (choseProducts: ISingleCartProducts[]) => {
        setsinglecard(choseProducts)
    }
    console.log(singlecard)

    return (
        <div>
            <Cardscomp choseProducts={choseProducts}/>
            <Productscomp products={singlecard}/>

        </div>
    );
};

export default App;

