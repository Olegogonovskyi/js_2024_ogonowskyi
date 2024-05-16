import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts";
import UsersPage from "../Pages/UsersPage/UsersPage";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>
            }
        ]
    }
])