import axios, {AxiosResponse} from "axios";

const baseUrl = 'https://dummyjson.com'

const axiosdummyinstance = axios.create({
    baseURL: baseUrl,
    headers: { 'Content-Type': 'application/json' }
})

const getallusers = (): Promise<AxiosResponse<any>> => {
  return axiosdummyinstance.get('/users')
}

const getpostofuser = (id:number): Promise<AxiosResponse<any>> => {
    return axiosdummyinstance.get(`/posts/user/${id}`)
}

export {
    getallusers, getpostofuser
}
