import axios from "axios";
import {baseUrl, urls} from "../Constants/Urls";
import {tokenKey} from "../Constants/costants";
import {localStorageHelper} from "../helpers/localStorageHelper";
import {ITokenRefresh} from "../Models/ITokenRefresh";

export const axiosInstanse = axios.create({
    baseURL: baseUrl
})

axiosInstanse.interceptors.request.use(request => {
    if (localStorage.getItem(tokenKey) && request.url !== urls.refreshUser) {
request.headers.set('Authorization', 'Bearer ' + localStorageHelper<ITokenRefresh>(tokenKey).access)
    }
    return request
})