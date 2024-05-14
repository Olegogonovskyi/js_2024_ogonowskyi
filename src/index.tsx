import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./Pages/mainLayout";
import UserDetailPage from "./Pages/UserDetailPage";
import UsersPage from "./Pages/UsersPage";
import UsersDummyPage from "./Pages/UsersDummy Page";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/users',
                element: <UsersPage/>
            },
            {
                path: '/users/:id',
                element: <UserDetailPage/>
            },
            {
                path: '/dummy-users',
                element: <UsersDummyPage/>
            },
            {
            {
                path: '/dummy-users/:id',
                element: <UserDummyDetailPage/>
            }
            }
        ]
    }
])
root.render(

    <RouterProvider router={routes} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
