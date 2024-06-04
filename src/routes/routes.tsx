import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import UsersPage from "../Pages/UsersPage/UsersPage";
import {urls} from "../costants/urls";
import PostsPage from "../Pages/PostsPage/PostsPage";
import UsersPostaPage from "../Pages/UsersPostaPage/UsersPostaPage";
import CommemtsPage from "../Pages/CommemtsPage/CommemtsPage";
import PostComentsPage from "../Pages/PostComentsPage/PostComentsPage";

export const route = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {
                path: urls.users, element: <UsersPage/>
            },
            {
                path: urls.posts, element: <PostsPage/>
            },
            {
                path: urls.usersPosts, element: <UsersPostaPage/>
            },
            {
                path: urls.comments, element: <CommemtsPage/>
            },
            {
                path: urls.postsComments, element: <PostComentsPage/>
            }
        ]}
])