import {AxiosResponse} from "axios";
import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/urls";
import {IPostModel} from "../models/IPostModel";

export const PostsApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstanse.get(urls.posts)
    }
}