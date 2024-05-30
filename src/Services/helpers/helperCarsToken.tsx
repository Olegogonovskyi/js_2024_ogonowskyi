import {LocalStorageService} from "../localStorageService/localStorageService";

export const HelperCarsToken = <T, >(key: string) => {
    const isToken = localStorage.getItem(key) || '';

    if (!isToken) {
        return {} as T
    } else {
        return LocalStorageService.getByKey(key) as T
    }


}