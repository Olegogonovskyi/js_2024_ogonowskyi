import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/urls";
import {IuserModel} from "../models/IuserModel";


export const UsersApiService = {
    getAllUsers: async (): Promise<IuserModel[]> => {
        const response = await axiosInstanse.get<IuserModel[]>(urls.users)
        return response.data
    }
}