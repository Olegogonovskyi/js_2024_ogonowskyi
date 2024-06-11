import axios from "axios";
import {baseUrl} from "../Constants/Urls";

export const axiosInstanse = axios.create({
    baseURL: baseUrl
})