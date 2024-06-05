import React, {FC, useEffect} from 'react';
import HeaderPage from "../HeaderPage/HeaderPage";
import {Outlet} from "react-router-dom";
import {useStore} from "../../context/Store";
import {UsersApiService} from "../../services/users.api.service";
import {PostsApiService} from "../../services/posts.api.service";
import {CommentsApiService} from "../../services/comments.api.service";

const MainLayout: FC = () => {

    const {usersStore, postsStore, commentsStore} = useStore()
    useEffect(() => {
        UsersApiService.getAllUsers().then(value => usersStore.loadUsers(value.data))
        PostsApiService.getAllPosts().then(value => postsStore.loadPosts(value.data))
        CommentsApiService.getAllPosts().then(value => commentsStore.loadComments(value.data))

    }, []);


    return (
        <div>
            <HeaderPage/>

            <Outlet/>


            <hr/>
            {usersStore.favoriteUser && <h1>{usersStore.favoriteUser.name}</h1>}
            {usersStore.favoriteUser && <button onClick={usersStore.delFavoriteUser}>del</button>}
            {postsStore.favoritePost && <h1>{postsStore.favoritePost.title}</h1>}
            <hr/>


        </div>
    );
};

export default MainLayout;