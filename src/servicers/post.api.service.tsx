import {axiosApiService} from "./axios.api.service";
import {urls} from "../costants/urls";
import {IPostModel} from "../models/IPostModel";

export const postApiService = {
    getAll: async (): Promise<IPostModel[]> => {
        const response = await axiosApiService.get<IPostModel[]>(urls.postUrls.posts)
        return response.data
    },
    getById: async (id: string | undefined): Promise<IPostModel | undefined> => {
        if (id) {
            const response = await axiosApiService.get<IPostModel>(urls.postUrls.postById(id))
            return response.data
        }
        return undefined
    }
}