import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "./Urls/urls";
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";
import {AxiosError} from "axios";
import {HelperCarsToken} from "./helpers/helperCarsToken";
import {ITokenRefresh} from "../Models/ITokenRefresh/ITokenRefresh";
import {tokenKey} from "./constants/constants";
import {authService} from "./authService";

export const carsService = {
    getAllCars: async (): Promise<ICarPaginatedModel | null> => {

        try {
            const response = await axiosInstance.get<ICarPaginatedModel>(carsUrls.allCars)
            return response.data
        } catch (e) {
            const axiosError = e as AxiosError
            if (axiosError?.response?.status === 401) {
                const refrToken = HelperCarsToken<ITokenRefresh>(tokenKey).refresh
                await authService.authRefr(refrToken)
                return carsService.getAllCars()
            }

        }
        return null
    }
}