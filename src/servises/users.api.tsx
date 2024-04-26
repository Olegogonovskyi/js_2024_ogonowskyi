import axios, {AxiosResponse} from "axios";
import IUsermodel from "../models/user_model";


const baseurl = 'https://jsonplaceholder.typicode.com'

const axiosinstanse = axios.create({
    baseURL: baseurl,
    headers: {'Content-type': 'application/json'},
});

const getallusers = ():Promise<AxiosResponse<IUsermodel[]>> => {
  return axiosinstanse.get('/users')
}

export default getallusers