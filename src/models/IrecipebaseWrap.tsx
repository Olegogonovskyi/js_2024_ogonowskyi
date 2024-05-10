
export interface IrecipebaseWrap {
    limit: number,
    total:number
    recipes: {
        id: number,
        name: string,
        ingredients: string[],
        instructions: string[],
        cuisine: string,
        image: string
    }[];
}