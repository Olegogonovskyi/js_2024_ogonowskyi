import axios from "axios";
import {baseUrl} from "../urls/urls";

export const axiosInstance = axios.create({
    baseURL: baseUrl
})