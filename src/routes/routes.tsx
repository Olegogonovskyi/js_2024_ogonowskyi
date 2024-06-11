import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import {urls} from "../Constants/Urls";
import CarsPage from "../Pages/CarsPage/CarsPage";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {
                index: true,
                element: <LoginPage/>
            },
            {
                path: urls.cars,
                element: <CarsPage/>
            }
        ]}
])