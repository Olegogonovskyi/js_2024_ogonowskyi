import React, {FC, useReducer} from 'react';
import './App.css';
import Test from "./Test";

const redusActions = (state: number, action: {type: string}) => {
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
      dispatch({type: 'add'});
    }
    const minus = () => {
        dispatch({type: 'minus'});
    }
    const reset = () => {
        dispatch({type: 'reset'});
    }


  return (
      <div>
          <h1>{number}</h1>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
          <button onClick={reset}>reset</button>

          <Test/>
      </div>
  );
};

export default App;

