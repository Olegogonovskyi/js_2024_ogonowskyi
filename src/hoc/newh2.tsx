import React, {FC} from 'react';



const Newhtwo = (Compon: FC<any>) => {

    return (props:any) => {
        return (
            <div>
                <h1>hoc</h1>
                <Compon {...props}/>
                <h1>end hoc</h1>

            </div>
        );
    };

};

export default Newhtwo;