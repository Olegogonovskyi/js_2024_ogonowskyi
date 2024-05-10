import {ISingleCartProducts} from "./ISingleCartProducts";


export interface ICardmodelbase {
    id: number,
    total: number,
    totalProducts: number,
    products: ISingleCartProducts[]


}