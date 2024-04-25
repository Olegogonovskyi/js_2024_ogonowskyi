import React, {FC, useReducer} from 'react';
import './App.css';

const redusActions = (state: number, action: {type: string, playload: number}) => {
  switch (action.type) {
      case 'add':
          return ++state;
      case 'minus':
          return --state;
      case 'reset':
          return 0;
  }
  return state;
}

const App: FC = () => {

    const [number, dispatch] = useReducer(redusActions, 0);

    const add = () => {
      dispatch({type: 'add', playload:0});
    }
    const minus = () => {
        dispatch({type: 'minus', playload:0});
    }
    const reset = () => {
        dispatch({type: 'reset', playload:0});
    }


  return (
      <div>
          <h1>{number}</h1>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
          <button onClick={reset}>reset</button>
      </div>
  );
};

export default App;

