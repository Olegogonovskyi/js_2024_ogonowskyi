import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Mainpage from "./Pages/mainpage";
import UsersPage from "./Pages/UsersPage";
import PostsPage from "./Pages/PostsPage";
import UserPost from "./Pages/UserPost/UserPost";
import UserPosts from "./Pages/UserPosts/UserPosts";
import Userposts from "./Pages/Userposts";

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
                element: <UsersPage/>
            },
            {
                path: '/posts',
                element: <PostsPage/>
            },
            {
                path: '/userpost',
                element: <Userposts/>
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
