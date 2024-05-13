import axios, {AxiosResponse} from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const axiosJsonPlaceholderInstatce = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})


const getAllUsersJson = (): Promise<AxiosResponse<any>> => {
  return axiosJsonPlaceholderInstatce.get('/users')
}

export default getAllUsersJson