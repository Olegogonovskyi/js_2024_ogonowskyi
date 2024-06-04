import React, {FC, useEffect, useState} from 'react';
import HeaderPage from "../HeaderPage/HeaderPage";
import {Outlet} from "react-router-dom";
import {Context, defoultValue} from "../../context/ContextProvider";
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

    useEffect(() => {
        UsersApiService.getAllUsers().then(value => setUsers(value.data))
        PostsApiService.getAllPosts().then(value => setPosts(value.data))
        CommentsApiService.getAllPosts().then(value => setComments(value.data))

    }, []);

    return (
        <div>
            <HeaderPage/>
            <Context.Provider value={{
                usersStore: {
                    allusers: users
                },
                postsStore: {
                    allPosts: posts
                },
                commetsStore: {
                    allComments: comments
                }
            }}>
                <Outlet/>
            </Context.Provider>

        </div>
    );
};

export default MainLayout;