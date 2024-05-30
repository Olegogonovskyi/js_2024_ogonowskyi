import {ITokenObtainPairModel} from "../Models/ITokenObtainPairModel/ITokenObtainPairModel";
import {axiosInstance} from "./api.axios.service";
import {authUrls} from "./Urls/urls";
import {LocalStorageService} from "./localStorageService/localStorageService";
import {tokenKey} from "./constants/constants";

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

    }
}

export {
    authService
}