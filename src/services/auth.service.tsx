import {axiosInstanse} from "./axios.api.service";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {urls} from "../Constants/Urls";
import {tokenKey} from "../Constants/costants";
import {IUserResponse} from "../Models/IUserResponse";

const authService = {
    authLogin: async (loginData: ITokenObtainPair): Promise<IUserResponse>  => {
        const {data} = await axiosInstanse.post(urls.authUser, loginData)
        localStorage.setItem(tokenKey, JSON.stringify(data))
        const currentUser = await axiosInstanse.get(urls.authMe)
        return currentUser.data

    }
}

export {authService}