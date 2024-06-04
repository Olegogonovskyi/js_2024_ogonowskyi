import React, {FC, useEffect, useState} from 'react';
import HeaderPage from "../HeaderPage/HeaderPage";
import {Outlet} from "react-router-dom";
import {Context} from "../../context/ContextProvider";
import {IuserModel} from "../../models/IuserModel";
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import {UsersApiService} from "../../services/users.api.service";
import {PostsApiService} from "../../services/posts.api.service";
import {CommentsApiService} from "../../services/comments.api.service";

const MainLayout: FC = () => {
    const [users, setUsers] = useState<IuserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [comments, setComments] = useState<ICommentModel[]>([])
    const [favoriteUserState, setfavoriteUserState] = useState<IuserModel | null>(null)
    const [favoritePostState, setfavoritePostState] = useState<IPostModel | null>(null)

    useEffect(() => {
        UsersApiService.getAllUsers().then(value => setUsers(value.data))
        PostsApiService.getAllPosts().then(value => setPosts(value.data))
        CommentsApiService.getAllPosts().then(value => setComments(value.data))

    }, []);


    const srtFavoriteUser = (obj: IuserModel) => {
    setfavoriteUserState(obj)
}
    const srtFavoritePost = (obj: IPostModel) => {
        setfavoritePostState(obj)
    }

    return (
        <div>
            <HeaderPage/>
            <Context.Provider value={{
                usersStore: {
                    allusers: users,
                    setFavoriteUser: (obj: IuserModel) => srtFavoriteUser(obj)
                },
                postsStore: {
                    allPosts: posts,
                    setFavoritePost: (obj: IPostModel) => srtFavoritePost(obj)
                },
                commetsStore: {
                    allComments: comments
                }
            }}>
                <Outlet/>
            </Context.Provider>

            <hr/>
            {favoriteUserState && <h1>{favoriteUserState.name}</h1>}
            {favoritePostState && <h1>{favoritePostState.title}</h1>}
            <hr/>


        </div>
    );
};

export default MainLayout;