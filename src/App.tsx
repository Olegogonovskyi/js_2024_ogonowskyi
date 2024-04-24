import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";


const App: FC = () => {
    const [userid, setuserid] = useState<number>()
    const clikker = (id: number) => {
        setuserid(id)
    }

    return (
        <>
            <Users clikker={clikker}/>
            {userid && <Posts userid={userid}/>}
    {/*{userid && <h1>{userid}</h1>}*/
    }

</>
)
    ;
};

export default App;

