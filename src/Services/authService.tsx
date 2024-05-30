import {ITokenObtainPairModel} from "../Models/ITokenObtainPairModel/ITokenObtainPairModel";
import {axiosInstance} from "./api.axios.service";
import {authUrls} from "./Urls/urls";
import {LocalStorageService} from "./localStorageService/localStorageService";
import {tokenKey} from "./constants/constants";
import {ITokenRefresh} from "../Models/ITokenRefresh/ITokenRefresh";

const authService = {
    authLogin: async (loginData: ITokenObtainPairModel) => {
        try {

            const response = await axiosInstance.post(authUrls.auth, loginData)
            LocalStorageService.setByKey(tokenKey, response.data)
            console.log(response.data)
            return !!(response.data.access && response.data.refresh)

        } catch (e) {
            console.log(e)
            return false
        }

    },
    authRefr: async (refrToken: string): Promise<ITokenRefresh> => {
        const response = await axiosInstance.post(authUrls.authRefresh, {refresh: refrToken})
        LocalStorageService.setByKey(tokenKey, response.data)
        return response.data
    }
}

export {
    authService
}