import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts";
import UsersPage from "../Pages/UsersPage/UsersPage";
import PostsPage from "../Pages/PostsPage/PostsPage";
import React from "react";
import CommemtsPage from "../Pages/CommemtsPage/CommemtsPage";
import MainPage from "../Pages/MainPage/MainPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserPosts from "../Pages/UserPosts/UserPosts";
import CommentsofPostPage from "../Pages/CommentsofPostPage/CommentsofPostPage";

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
                element: <UsersPage/>,
                children: [
                    {
                        path: ':id/posts',
                        element: <UserPosts/>
                    }
                ]
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                children: [
                    {
                        path: ':id/comments',
                        element: <CommentsofPostPage/>
                    }
                ]
            },
            {
                path: 'comments',
                element: <CommemtsPage/>
            }
        ]
    }
])