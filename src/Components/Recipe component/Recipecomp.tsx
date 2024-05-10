import React, {FC} from 'react';
import {IRecipesbase} from "../../models/IRecipesbase";

const Recipecomp: FC<IRecipesbase> = ({id, image, cuisine, name, instructions, ingredients}) => {
    console.log('Recipecomp')
    return (
        <div>
            <h2>{id}: {name} - {cuisine}</h2>
            <p>{instructions}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Recipecomp;