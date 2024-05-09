import axios, {AxiosResponse} from "axios";
import {ICardsmodelwrap} from "../models/ICardsmodelwrap";

const baseUrl = 'https://dummyjson.com'

const axiosinstanse = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'}
})

const getAllCards = (): Promise<AxiosResponse<ICardsmodelwrap>> => {
  return axiosinstanse.get('/carts')
}



export default getAllCards