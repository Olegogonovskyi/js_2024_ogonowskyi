import {axiosApiService} from "./axios.api.service";
import {urls} from "../costants/urls";
import {IUserModel} from "../models/IUserModel";

export const usersApiService = {
    getAll: async (): Promise<IUserModel[]> => {
        const response = await axiosApiService.get<IUserModel[]>(urls.usersUrls.users)
        return response.data
    },
    getById: async (id: string | undefined) : Promise<IUserModel | undefined> => {
        if (id) {
            const response = await axiosApiService.get<IUserModel>(urls.usersUrls.userById(id))
            return response.data
        }
        return undefined
    }
}

