import React, {FC} from 'react';

const ButtonsComponent: FC<{setterPage: (page: string)=> void}> = ({setterPage}) => {
    return (
        <div>
            <button onClick={()=> {
                setterPage('prev')
            }}>prev</button>
            <button onClick={()=> {
                setterPage('next')
            }}>next</button>

        </div>
    );
};

export default ButtonsComponent;