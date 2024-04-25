import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";



const App: FC = () => {
    const [userid, setUserid] = useState<number>(0)
    const clikker = (id:number) => {
        setUserid(id)
    }


    return (
        <>
            <Users clikker={clikker}/>
            {userid !== 0 && <Posts userid={userid} />}
    {/*{userid && <h1>{userid}</h1>}*/
    }

</>
)
    ;
};

export default App;

