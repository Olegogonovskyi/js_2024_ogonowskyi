import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const ProwideComp:FC = () => {
    const initialstate = useSelector((store: RootState) => store.users)

    return (
        <div>
            {
               initialstate && initialstate.map(value => <h1>{value.id} - {value.name}</h1>)
            }
        </div>
    );
};

export default ProwideComp;