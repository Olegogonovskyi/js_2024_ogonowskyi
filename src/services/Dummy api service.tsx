import axios, {AxiosResponse} from "axios";
import {IUsersDummyShortWrap} from "../models/DummyModels/IUsersDummyShortWrap";

const baseUrl = 'https://dummyjson.com'

const axiosDummyInstatce = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const getAllUsersDummy = (): Promise<AxiosResponse<IUsersDummyShortWrap>> => {
  return axiosDummyInstatce.get('/users')
}

export default getAllUsersDummy;