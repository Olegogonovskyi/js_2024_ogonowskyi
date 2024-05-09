import {ICardmodelbase} from "./ICardmodelbase";

export interface ICardProps {
    card: ICardmodelbase,
    choseProducts: (id:number) => void
}