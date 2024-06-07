import React, {FC} from 'react';
import './App.css';
import ComponentTwo from "./components/Componenttwo";
import {useSelector} from "react-redux";
import {RootState} from "./Store/store";
import ComponentOne from "./components/СomponentOne";


const App: FC = () => {
    const {count} = useSelector((state: RootState) => state.countOne)
    return (
        <div>
            {count}
            <ComponentOne/>
            <ComponentTwo/>
        </div>
    );
};

export default App;

