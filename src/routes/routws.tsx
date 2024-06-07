import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";

const route =  createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [{
        index: true,
        element: car
    }]
}])