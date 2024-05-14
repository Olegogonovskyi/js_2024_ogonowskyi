import axios, {AxiosResponse} from "axios";
import {IPostData} from "../models/IPostData";

const baseUrl = 'https://jsonplaceholder.typicode.com/'

const axiosInstanse = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})

const postDatatoApi = (singleData:IPostData): Promise<AxiosResponse<IPostData>> => {
  return axiosInstanse.post('/posts', {
      method: 'POST',
      body: JSON.stringify({
          title: singleData.title,
          body: singleData.body,
          userId: singleData.userId,
      })
  })
}

export default postDatatoApi