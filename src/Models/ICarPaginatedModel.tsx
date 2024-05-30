import {ICarWithAuthModel} from "./ICarWithAuthModel/ICarWithAuthModel";

export interface ICarPaginatedModel {
    total_items: number,
    total_pages: number,
    next: string,
    items: ICarWithAuthModel []
}