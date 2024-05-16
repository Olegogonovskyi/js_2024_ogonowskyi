import axios, {AxiosResponse} from "axios";
import {baseUrl, urlsJson} from "../costants/urls";
import {IUserbasicmodel} from "../models/IUserbasicmodel";

const axiosInstanse = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const axiosService = {
    getAllUsers: (): Promise<AxiosResponse<IUserbasicmodel[]>> => {
        return axiosInstanse.get(urlsJson.users.allUsers)
    }
};

export default axiosService;