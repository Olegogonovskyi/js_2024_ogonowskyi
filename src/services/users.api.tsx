import {IUser} from "../models/allmodels";
import axios, {AxiosResponse} from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com'

// const getallusers = ():Promise<IUser[]> => {
//   return fetch(baseUrl)
//       .then(value => value.json())
// }
//
// const getuserbyId = (id:number):Promise<IUser> => {
//   return fetch(baseUrl + '/' + id)
//       .then(value => value.json())
// }

const axiosinstance = axios.create({
    baseURL: baseUrl,
    headers: {'Content-type': 'application/json'},
})

const getallusers = ():Promise<AxiosResponse<IUser[]>> => {
  return axiosinstance.get('/users')
}

const getuserbyId = (id:number):Promise<AxiosResponse<IUser>> => {
    return axiosinstance.get('/users'+ id)
}
export {
    getallusers, getuserbyId
}