import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "./Urls/urls";
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";

export const carsService = {
    getAllCars: async (): Promise<ICarPaginatedModel | null> => {
        const response = await axiosInstance.get<ICarPaginatedModel>(carsUrls.allCars)
        return response.data
    }
}