import axios, {AxiosResponse} from "axios";


const baseurlproducts = 'https://dummyjson.com'

const axiosproductsinstance = axios.create({
    baseURL: baseurlproducts,
    headers: {'Content-Type': 'application/json'},
})

const getallProducts = (): Promise<AxiosResponse<any>> => {
    return axiosproductsinstance.get('/products')
}

export default getallProducts