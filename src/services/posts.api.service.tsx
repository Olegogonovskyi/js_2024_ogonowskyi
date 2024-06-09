
import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/urls";
import {IPostModel} from "../models/IPostModel";

export const PostsApiService = {
    getAllPosts: async (): Promise<IPostModel[]> => {
        const response = await axiosInstanse.get<IPostModel[]>(urls.posts)
        return response.data
    }
}