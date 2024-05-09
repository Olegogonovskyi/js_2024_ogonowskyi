import React, {FC, useState} from 'react';
import './App.css';
import Cardscomp from "./Components/Cards comp/Cardscomp";



const App: FC = () => {
    const [cardId, setcardId] = useState<number>(0)
    const choseProducts = (id:number) => {
        setcardId(id)
    }

  return (
      <div>
        <Cardscomp choseProducts={choseProducts}/>
       </div>
  );
};

export default App;

