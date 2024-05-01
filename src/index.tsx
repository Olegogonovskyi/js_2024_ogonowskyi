import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Users from "./components/Users/Users";
import Products from "./components/Products/products";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: 'users', element: <Users/>},
            {path: 'products', element: <Products/>}
        ]
    }
])

root.render(

    <RouterProvider router={routes}/>
    // <App/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
