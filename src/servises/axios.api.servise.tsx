import axios, {AxiosResponse} from "axios";
import {ICardsmodelwrap} from "../models/ICardsmodelwrap";
import {IrecipebaseWrap} from "../models/IrecipebaseWrap";

const baseUrl = 'https://dummyjson.com'
const jsonUrl = 'https://jsonplaceholder.typicode.com/'
const axiosinstanse = axios.create({
    baseURL: baseUrl,
    headers: {'Content-Type': 'application/json'}
})

const getAllCards = (): Promise<AxiosResponse<ICardsmodelwrap>> => {
    return axiosinstanse.get('/carts')
}

const getAllRecipes = ():Promise<AxiosResponse<IrecipebaseWrap>> => {
  return axiosinstanse.get('/recipes')
}

const axiosinstanseJson = axios.create({
    baseURL: jsonUrl,
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const getAllUsersJson = (): Promise<AxiosResponse<any>> => {
  return axiosinstanseJson.get('/users')
}

export  {getAllCards, getAllRecipes, getAllUsersJson}