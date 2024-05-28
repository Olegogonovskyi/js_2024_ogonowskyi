import {axiosInstance} from "./api.axios.service";
import {authUrls} from "../urls/urls";
import {ITokenObtainPair} from "../models/ITokenObtainPair/ITokenObtainPair";
import {tokenKey} from "../constants/constants";

const  authService = {
    authUser: async (authUsersData:ITokenObtainPair) => {
        try {
            const response = await axiosInstance.post(authUrls.auth, authUsersData)
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