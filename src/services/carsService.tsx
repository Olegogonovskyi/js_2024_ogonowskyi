import {axiosInstance} from "./api.axios.service";
import {carsUrls} from "../urls/urls";
import {ICarPaginated} from "../models/ICarPaginated";
import {AxiosError} from "axios";
import {helperCarsToken} from "../helpers/helpers";
import {ITokenRefresh} from "../models/ITokenRefresh";
import {tokenKey} from "../constants/constants";
import {authService} from "./auth.service";

export const carsService = {
    getCars: async (): Promise<ICarPaginated | null> => {
        try {
            const response = await axiosInstance.get<ICarPaginated>(carsUrls.cars)
            return response.data
        } catch (e) {
            let axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refrToken = helperCarsToken<ITokenRefresh>(tokenKey).refresh

                await authService.authRefresh(refrToken)
                return carsService.getCars()
            }
        }
        return null
    }

}