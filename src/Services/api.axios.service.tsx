import axios from "axios";
import {authUrls, basicUrl} from "./Urls/urls";
import {tokenKey} from "./constants/constants";
import {HelperCarsToken} from "./helpers/helperCarsToken";
import {ITokenRefresh} from "../Models/ITokenRefresh/ITokenRefresh";

const axiosInstance = axios.create({baseURL: basicUrl})

axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem(tokenKey) && request.url !== authUrls.authRefresh)
request.headers.set('Authorization', 'Bearer ' + HelperCarsToken<ITokenRefresh>(tokenKey).access)

   return request
})

export {
    axiosInstance
}