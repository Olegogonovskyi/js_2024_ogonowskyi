import axios, {AxiosResponse} from "axios";
import IUsermodel from "../models/IUsermodel";


const baseurlusers = 'https://dummyjson.com'

const axiosusersinstance = axios.create({
    baseURL: baseurlusers,
    headers: {'Content-Type': 'application/json'},
})

const getallusers = (): Promise<AxiosResponse<IUsermodel[]>> => {
    return axiosusersinstance.get('/users')
}

export default getallusers