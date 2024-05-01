import axios, {AxiosResponse} from "axios";


const baseurlusers = 'https://dummyjson.com'

const axiosusersinstance = axios.create({
    baseURL: baseurlusers,
    headers: {'Content-Type': 'application/json'},
})

const getallusers = (): Promise<AxiosResponse<any>> => {
    return axiosusersinstance.get('/users')
}

export default getallusers