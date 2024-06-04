import axios from "axios";
import {baseUrl} from "../costants/urls";

export const axiosInstanse = axios.create({
    baseURL: baseUrl
})