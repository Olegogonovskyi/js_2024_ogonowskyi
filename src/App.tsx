import React, {FC} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {counterOneActions} from "./redux/slices/counterOneSlice";


const App: FC = () => {
    const {value} = useAppSelector(state => state.counterOne)
    const dispatch = useAppDispatch();
    return (
        <div>
            <h1>Нумер {value}</h1>
            <br/>
            <button onClick={() => dispatch(counterOneActions.increment())}>increment</button>
            <button onClick={() => dispatch(counterOneActions.decrement())}>decrement</button>
            <button onClick={() => dispatch(counterOneActions.reset())}>reset</button>
            <button onClick={() => dispatch(counterOneActions.addHundred(100))}>addHundred</button>
        </div>
    );
};

export default App;

