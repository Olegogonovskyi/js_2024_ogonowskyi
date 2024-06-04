import {AxiosResponse} from "axios";
import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/urls";
import {ICommentModel} from "../models/ICommentModel";

export const CommentsApiService = {
    getAllPosts: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstanse.get(urls.comments)
    }
}