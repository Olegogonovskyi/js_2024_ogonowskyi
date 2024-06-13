import axios from "axios";
import {baseUrl} from "../costants/urls";

export const axiosApiService = axios.create({
    baseURL: baseUrl,
    headers: {}
})