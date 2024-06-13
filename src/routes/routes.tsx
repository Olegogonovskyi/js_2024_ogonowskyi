import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import {urls} from "../costants/urls";
import UsersPage from "../Pages/UsersPage/UsersPage";
import PostsPage from "../Pages/PostPage/PostsPage";
import SingleUserPage from "../Pages/SingleUserPage/SingleUserPage";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: urls.usersUrls.users, element: <UsersPage/>
        },
        {
            path: 'users/:id', element: <SingleUserPage/>
        },
        {
            path: urls.postUrls.posts, element: <PostsPage/>
        }
    ]
}])