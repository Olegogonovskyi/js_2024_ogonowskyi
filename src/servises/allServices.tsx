import axios, {AxiosResponse} from "axios";
import {baseJsonUrl, urlsJson} from "../constants/urls";
import {IUserJsonBaseModel} from "../models/modelsJson/IUserJsonBaseModel";

const axiosInstanseJson = axios.create({
    baseURL: baseJsonUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8',}
})
const userJsonService = {
    getAllUsersJson: (): Promise<AxiosResponse<IUserJsonBaseModel[]>> => {
        return axiosInstanseJson.get(urlsJson.users.allUsers)
    },
    getUserbyIdJson: (id:string): Promise<AxiosResponse<IUserJsonBaseModel>> => {
        return axiosInstanseJson.get(urlsJson.users.usersById(id))
    }

}


export {
    userJsonService
}