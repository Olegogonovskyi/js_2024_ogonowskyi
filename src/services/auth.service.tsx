import {axiosInstanse} from "./axios.api.service";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {urls} from "../Constants/Urls";
import {tokenKey} from "../Constants/costants";

const authService = {
    authLogin: async (loginData: ITokenObtainPair)  => {
        const {data} = await axiosInstanse.post(urls.authUser, loginData)
        localStorage.setItem(tokenKey, JSON.stringify(data))
        console.log(data)
    }
}

export {authService}