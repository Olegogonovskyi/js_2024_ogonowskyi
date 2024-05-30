import axios from "axios";
import {basicUrl} from "./Urls/urls";

const axiosInstance = axios.create({baseURL: basicUrl})


export {
    axiosInstance
}