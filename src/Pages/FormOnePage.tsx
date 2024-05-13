import React, {FC} from 'react';
import Formcomp from "../Components/Form Component/Formcomp";
import Formcomptwo from "../Components/Form Component two/Formcomptwo";

const FormOnePage: FC = () => {
    return (
        <div>
            <Formcomp/>
            <hr/>
            <Formcomptwo/>
        </div>
    );
};

export default FormOnePage;