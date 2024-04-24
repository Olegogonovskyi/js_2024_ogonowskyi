import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";


const App: FC = () => {
    const [userid, setuserid] = useState<number>(0)
    const clikker = (id:number) => {
      setuserid(id)
    }

  return (
      <>
        <Users clikker={clikker}/>
          {userid && <h1>{userid}</h1>}

      </>
  );
};

export default App;

