import {ICardmodelbase} from "./ICardmodelbase";

export interface ICardsmodelwrap {
    carts: ICardmodelbase [],
    limit: number,
    total: number
}