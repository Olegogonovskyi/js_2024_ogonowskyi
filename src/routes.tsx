import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout/Mainlayout";
import AuthPage from "./Pages/AuthPage/AuthPage";
import CarsPage from "./Pages/CarsPage/CarsPage";

export const routes = createBrowserRouter([
    {path: '/',  element: <Mainlayout/>,  children: [
            {
                index: true,
                element: <AuthPage/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            }
        ]}
])