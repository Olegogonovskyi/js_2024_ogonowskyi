import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/urls";
import {IuserModel} from "../models/IuserModel";
import {AxiosResponse} from "axios";

export const UsersApiService = {
    getAllUsers: (): Promise<AxiosResponse<IuserModel[]>> => {
        return axiosInstanse.get(urls.users)
    }
}