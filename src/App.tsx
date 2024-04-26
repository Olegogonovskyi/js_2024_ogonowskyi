import React, {FC, useReducer, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Userstwo from "./components/Userstwo/Userstwo";

const countfunk = (state: number, action: { type: string }) => {
    switch (action.type) {
        case 'add': {
            return ++state
        }
        case 'minus': {
            return --state
        }
        case 'reset': {
            return 0
        }
    }
    return state
}

const App: FC = () => {

    const [userid, setUserid] = useState<number>(0)
    const [number, dispatch] = useReducer(countfunk, 0)

    const hendler = (id: number) => {
        setUserid(id)
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={() => dispatch({type: 'add'})}>add</button>
            <button onClick={() => dispatch({type: 'minus'})}>minus</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
            <Users hendler={hendler}/>
            <Userstwo hendler={hendler}/>
            {userid !== 0 && <Posts id={userid}/>}

        </div>
    );
};

export default App;

