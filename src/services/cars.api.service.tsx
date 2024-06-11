import {axiosInstanse} from "./axios.api.service";
import {urls} from "../Constants/Urls";
import {ICarPaginated} from "../Models/ICarPaginated";

export const carsApiService = {
    getAllCars: async (page: string): Promise<ICarPaginated> => {
        const response = await axiosInstanse.get<ICarPaginated>(urls.cars, {params: {page: page}})
        console.log(response.data)
        return response.data
    }
}