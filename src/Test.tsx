import React, {useReducer} from 'react';


const reduseAction = (state:number, action: {type: string, payload: number}) => {
  switch (action.type) {
      case 'add':
          return ++state;
      case 'minus':
          return --state;
      case  'reset':
          return 0
  }
  return state
}
const Test = () => {
    const [number, dispatch] = useReducer(reduseAction, 0)
    const add = () => {
      dispatch({type: 'add', payload: 0})
    }
    const minus = () => {
        dispatch({type: 'minus', payload: 0})
    }
    const reset = () => {
        dispatch({type: 'reset', payload: 0})
    }

    return (
        <div>
            <h3>{number}</h3>
            <button onClick={add} >add</button>
            <button onClick={minus} >minus</button>
            <button onClick={reset} >reset</button>
        </div>
    );
};

export default Test;