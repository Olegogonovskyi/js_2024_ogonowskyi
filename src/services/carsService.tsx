import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "../urls/urls";
import {ICarPaginated} from "../models/ICarPaginated";

 export  const carsService ={
    getCars: async (): Promise<ICarPaginated> => {
       const response = await axiosInstance.get(carsUrls.cars)
        return response.data
    }
}