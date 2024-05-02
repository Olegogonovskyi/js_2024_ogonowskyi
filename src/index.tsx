import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainpage from "./Pages/mainpage";
import Users from "./Pages/Users/Users";
import Posts from "./Pages/Posts/Posts";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainpage/>,
        children: [
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/posts',
                element: <Posts/>
            }
        ]
    }
])

root.render(
    <RouterProvider router={routes}/>

    // <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
