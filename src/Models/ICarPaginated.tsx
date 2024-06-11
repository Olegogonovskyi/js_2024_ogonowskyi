import {ICarResponseModel} from "./ICarResponseModel";
import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginated {
    total_items: number,
    total_pages: number,
    prev: ICarResponseModel | null,
    next: ICarResponseModel | null,
    items: ICarWithAuth[]
}