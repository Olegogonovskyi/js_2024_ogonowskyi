import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>
    }
])