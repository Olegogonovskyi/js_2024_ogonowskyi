import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import {urls} from "../costants/urls";
import UsersPage from "../Pages/UsersPage/UsersPage";
import PostsPage from "../Pages/PostsPage/PostsPage";
import SingleUserPage from "../Pages/SingleUserPage/SingleUserPage";
import SinglePostPage from "../Pages/SinglePostPage/SinglePostPage";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {
            path: urls.usersUrls.users, element: <UsersPage/>
        },
        {
            path: `${urls.usersUrls.users}/:id`, element: <SingleUserPage/>
        },
        {
            path: urls.postUrls.posts, element: <PostsPage/>
        },
        {
            path: `${urls.postUrls.posts}/:id`, element: <SinglePostPage/>
        }
    ]
}])