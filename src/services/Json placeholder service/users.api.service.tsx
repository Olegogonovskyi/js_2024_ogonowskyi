import axios, {AxiosResponse} from "axios";
import {IUsersModelWrap} from "../../models/Jsonplaceholder models/IUsesrModelWrap";
import {IUserFullModel} from "../../models/Jsonplaceholder models/IUserFullModel";

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const axiosJsonPlaceholderInstatce = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})


const getAllUsersJson = (): Promise<AxiosResponse<IUserFullModel[]>> => {
  return axiosJsonPlaceholderInstatce.get('/users')
}

export default getAllUsersJson