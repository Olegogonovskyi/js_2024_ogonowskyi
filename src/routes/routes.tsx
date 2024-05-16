import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts";
import UsersPage from "../Pages/UsersPage/UsersPage";
import PostsPage from "../Pages/PostsPage/PostsPage";
import React from "react";
import CommemtsPage from "../Pages/CommemtsPage/CommemtsPage";
import MainPage from "../Pages/MainPage/MainPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'comments',
                element: <CommemtsPage/>
            }
        ]
    }
])