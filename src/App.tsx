import React, {FC} from 'react';
import './App.css';
import ComponentTwo from "./components/Componenttwo";
import {useSelector} from "react-redux";
import {RootState} from "./Store/store";
import ComponentOne from "./components/СomponentOne";


const App: FC = () => {
    const counter = useSelector((state: RootState) => state.countOne)
    return (
        <>
            {counter}
            <ComponentOne/>
            <ComponentTwo/>
        </>
    );
};

export default App;

