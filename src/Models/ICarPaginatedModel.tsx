import {ICarWithAuthModel} from "./ICarWithAuthModel/ICarWithAuthModel";
import {IGetCarResponseModel} from "./IGetCarResponseModel";

export interface ICarPaginatedModel {
    total_items: number,
    total_pages: number,
    prev: null | IGetCarResponseModel,
    next: null | IGetCarResponseModel,
    items: ICarWithAuthModel []
}