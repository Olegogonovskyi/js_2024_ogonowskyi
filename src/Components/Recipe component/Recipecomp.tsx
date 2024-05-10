import React, {FC} from 'react';
import {IRecipesbase} from "../../models/IRecipesbase";

const Recipecomp: FC<IRecipesbase> = ({id, image, cuisine, name, instructions, ingredients}) => {
    return (
        <div>
            <h2>{id}: {name}</h2>
        </div>
    );
};

export default Recipecomp;