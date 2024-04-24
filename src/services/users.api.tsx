import {IUser} from "../models/allmodels";

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getallusers = ():Promise<IUser[]> => {
  return fetch(baseUrl)
      .then(value => value.json())
}

const getuserbyId = (id:number):Promise<IUser> => {
  return fetch(baseUrl + '/' + id)
      .then(value => value.json())
}
export {
    getallusers, getuserbyId
}