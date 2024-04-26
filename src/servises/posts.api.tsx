import axios, {AxiosResponse} from "axios";
import IPostModel from "../models/postModel";


const baseurl = 'https://jsonplaceholder.typicode.com'

const axiosinstanse = axios.create({
    baseURL: baseurl,
    headers: {'Content-type': 'application/json'},
});

const getpostbyUser = (id:number):Promise<AxiosResponse<IPostModel[]>> => {
    return axiosinstanse.get('/users/' + id + '/posts')
}

export default getpostbyUser