import {IUserAdressGeoBasicModel} from "./IUserAdressGeoBasicModel";

export interface IUserAdressBasicModel {

    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": IUserAdressGeoBasicModel
}