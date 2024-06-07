import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {calcOneActions} from "../Store/slices/calcOneSlice";

const ComponentOne: FC = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(calcOneActions.inc())}>add one</button>
            <button onClick={()=> dispatch(calcOneActions.dec())}>minus one</button>
            <button onClick={()=> dispatch(calcOneActions.reset())}>reset one</button>
        </div>
    );
};

export default ComponentOne;