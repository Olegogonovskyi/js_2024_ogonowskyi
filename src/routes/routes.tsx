import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout/Mainlayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import CarsPage from "../Pages/CarsPage/CarsPage";
import CarsPaginatedHocPage from "../Pages/CarsPaginatedHocPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Mainlayout/>, children: [
            {
                index: true,
                element: <LoginPage/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            },
            {
                path: 'carsPagin',
                element: <CarsPaginatedHocPage/>
            }
        ]
    }
])