import {IRecipesbase} from "./IRecipesbase";

export interface IrecipebaseWrap {
    limit: number,
    total:number
    recipes: IRecipesbase[];
}