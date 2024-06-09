
import {axiosInstanse} from "./axios.api.service";
import {urls} from "../costants/urls";
import {ICommentModel} from "../models/ICommentModel";

export const CommentsApiService = {
    getAllPosts: async (): Promise<ICommentModel[]> => {
        const response = await axiosInstanse.get<ICommentModel[]>(urls.comments)
        return response.data
    }
}