import axios, {AxiosResponse} from "axios";
import Iproductmodel from "../models/Iproductmodel";


const baseurlproducts = 'https://dummyjson.com'

const axiosproductsinstance = axios.create({
    baseURL: baseurlproducts,
    headers: {'Content-Type': 'application/json'},
})

const getallProducts = (): Promise<AxiosResponse<Iproductmodel[]>> => {
    return axiosproductsinstance.get('/products')
}

export default getallProducts