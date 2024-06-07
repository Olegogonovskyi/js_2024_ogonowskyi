import {IuserModel} from "./IuserModel";

export interface IUserStateModel {
    items: IuserModel[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}