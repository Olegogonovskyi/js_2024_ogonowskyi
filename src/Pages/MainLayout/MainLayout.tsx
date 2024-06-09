import React, {FC, useEffect} from 'react';
import HeaderPage from "../HeaderPage/HeaderPage";
import {Outlet} from "react-router-dom";
import {UsersApiService} from "../../services/users.api.service";
import {PostsApiService} from "../../services/posts.api.service";
import {CommentsApiService} from "../../services/comments.api.service";
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../../context/slices/usersSlice";
import {postsActions} from "../../context/slices/postsSlice";
import {commentsActions} from "../../context/slices/commentsSlice";
import {RootState} from "../../context/Store";

const MainLayout: FC = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        UsersApiService.getAllUsers().then(value => dispatch(usersActions.getAllUsers(value)))
        PostsApiService.getAllPosts().then(value => dispatch(postsActions.getAllPosts(value)))
        CommentsApiService.getAllPosts().then(value => dispatch(commentsActions.getAllcomments(value)))

    }, [dispatch]);

    const {favoriteUser} = useSelector((state: RootState) => state.users)
    const {favoritePost} = useSelector((state: RootState) => state.posts)

    return (
        <div>
            <HeaderPage/>
            <Outlet/>

            <hr/>
            {favoriteUser && <h1>{favoriteUser.name}</h1>}
            {favoriteUser && <button onClick={()=> {dispatch(usersActions.setfavorite(null))}}>del user</button>}
            {favoritePost && <h1>{ favoritePost.title}</h1>}
            <hr/>


        </div>
    );
};

export default MainLayout;