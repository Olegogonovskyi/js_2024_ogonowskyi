import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import RecepiesPage from "./Pages/Recepies_page";
import CardsPage from "./Pages/Cards_page";
import Formcomp from "./Components/Form Component/Formcomp";
import FormOnePage from "./Pages/FormOnePage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainpage/>,
        children: [
            {
                path: '/recepies',
                element: <RecepiesPage/>
            },
            {
                path: '/cards',
                element: <CardsPage/>
            },
            {
                path: '/form',
                element: <FormOnePage/>
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
