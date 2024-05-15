import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UsersJsonPage from "./Pages/UsersJsonPage";
import MainLayout from "./Pages/MainLayout";
import UserJsonDetailPage from "./Pages/UserJsonDetailPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/usersjson',
            element: <UsersJsonPage/>
        },
        {
            path: '/usersjson/:id',
            element: <UserJsonDetailPage/>
        }
    ]
}])
root.render(

    <RouterProvider router={routes}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
