import axios from "axios";
import {authUrls, baseUrl} from "../urls/urls";
import {tokenKey} from "../constants/constants";
import {helperCarsToken} from "../helpers/helpers";
import {ITokenRefresh} from "../models/ITokenRefresh";

export const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.request.use((request) => {
if (localStorage.getItem(tokenKey) && request.url !== authUrls.refresh)
    request.headers.set('Authorization','Bearer ' + helperCarsToken<ITokenRefresh>(tokenKey).access)

    return request

})