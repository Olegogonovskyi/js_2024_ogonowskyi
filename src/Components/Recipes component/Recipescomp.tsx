import React, {FC} from 'react';
import {getAllRecipes} from "../../servises/axios.api.servise";
import WithAxiosGetAll from "../../hoc/withAxiosGetAll";
import {IrecipebaseWrap} from "../../models/IrecipebaseWrap";
import Recipecomp from "../Recipe component/Recipecomp";
interface IRecipescompProps {
   items:  IrecipebaseWrap
}
const Recipescomp: FC<IRecipescompProps> = ({items}) => {
    return (
        <div>
            {
                   items?.recipes.map(recipe => <Recipecomp key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image}
                                                    cuisine={recipe.cuisine} ingredients={recipe.ingredients}
                                                     instructions={recipe.instructions}/>)

            }
        </div>
    );
};
export default WithAxiosGetAll(Recipescomp, getAllRecipes);