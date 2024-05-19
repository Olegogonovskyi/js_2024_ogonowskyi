import axios, {AxiosResponse} from "axios";
import {baseUrl, urlsJson} from "../costants/urls";
import {IUserbasicmodel} from "../models/IUserbasicmodel";
import {IPostbasicModel} from "../models/IPostbasicModel";
import {ICommentsbasicModel} from "../models/IcommentsbasicModel";

const axiosInstanse = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const axiosService = {
    getAllUsers: (): Promise<AxiosResponse<IUserbasicmodel[]>> => {
        return axiosInstanse.get(urlsJson.users.allUsers)
    },
    getAllPosts: (): Promise<AxiosResponse<IPostbasicModel[]>> => {
        return axiosInstanse.get(urlsJson.posts.allPosts)
    },
    getAllComments: (): Promise<AxiosResponse<ICommentsbasicModel[]>> => {
        return axiosInstanse.get(urlsJson.comments.allComments)
    },
    getPostByUserId: (id: string): Promise<AxiosResponse<IPostbasicModel[]>> => {
        return axiosInstanse.get(`${urlsJson.users.allUsers}/${id}/${urlsJson.posts.allPosts}`)
    },
    getCommentsByPostId: (id: string): Promise<AxiosResponse<IPostbasicModel[]>> => {
        return axiosInstanse.get(`${urlsJson.posts.allPosts}/${id}/${urlsJson.comments.allComments}`)
    }
};


export default axiosService;