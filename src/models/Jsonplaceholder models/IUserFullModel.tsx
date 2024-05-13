import {IUserAdressBasicModel} from "./IUserAdressBasicModel";
import {IUserCompanyBasicModel} from "./IUserCompanyBasicModel";

export interface IUserFullModel {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": IUserAdressBasicModel
    "phone": string,
    "website": string,
    "company": IUserCompanyBasicModel
}
