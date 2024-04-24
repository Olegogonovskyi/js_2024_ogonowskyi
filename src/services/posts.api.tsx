import axios, {AxiosResponse} from "axios";
import {Iuserpost} from "../models/allmodels";

const baseUrl = 'https://jsonplaceholder.typicode.com'
const axiosPostapi = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json'},
})

const getPostbyuser = (id: number): Promise<AxiosResponse<Iuserpost[]>> => {
    return axiosPostapi.get('users' + id + 'posts')
}
export {getPostbyuser}