import {ISingleCartProducts} from "./ISingleCartProducts";
import {ISingleCartProductsWrap} from "./ISingleCartProductsWrap";


export interface ICardmodelbase {
    id: number,
    total: number,
    totalProducts: number,
    products: ISingleCartProductsWrap


}