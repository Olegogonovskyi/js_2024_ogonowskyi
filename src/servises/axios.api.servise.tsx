import axios, {AxiosResponse} from "axios";
import {ICardsmodelwrap} from "../models/ICardsmodelwrap";
import {IrecipebaseWrap} from "../models/IrecipebaseWrap";

const baseUrl = 'https://dummyjson.com'

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


export  {getAllCards, getAllRecipes}