import {axiosInstance} from "./api.axios.service";
import {authUrls} from "../urls/urls";
import {ITokenObtainPair} from "../models/ITokenObtainPair/ITokenObtainPair";
import {tokenKey} from "../constants/constants";
import {ITokenRefresh} from "../models/ITokenRefresh";

const  authService = {
    authUser: async (authUsersData:ITokenObtainPair) => {
        try {
            const response = await axiosInstance.post<ITokenRefresh>(authUrls.auth, authUsersData)
            localStorage.setItem(tokenKey, JSON.stringify(response.data))
            console.log(response)
        } catch (e) {
            console.log(e)
        }

    }
}

export {
    authService
}