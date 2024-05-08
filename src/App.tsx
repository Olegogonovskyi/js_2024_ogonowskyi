import React, {FC} from 'react';
import './App.css';
import {useToggle} from "./custom hooks/useToggle";



const App: FC = () => {
    let [value,toggleValue] = useToggle(true);


    toggleValue(false);
    console.log(value)

  return (
      <div>
        hello
      </div>
  );
};

export default App;

