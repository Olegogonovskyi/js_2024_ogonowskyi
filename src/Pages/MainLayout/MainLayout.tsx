import React, {FC, useEffect} from 'react';
import HeaderPage from "../HeaderPage/HeaderPage";
import {Outlet} from "react-router-dom";
import {UsersApiService} from "../../services/users.api.service";
import {PostsApiService} from "../../services/posts.api.service";
import {CommentsApiService} from "../../services/comments.api.service";
import {useDispatch} from "react-redux";
import {usersActions} from "../../context/slices/usersSlice";
import {postsActions} from "../../context/slices/postsSlice";
import {commentsActions} from "../../context/slices/commentsSlice";

const MainLayout: FC = () => {
const dispatch = useDispatch()


    useEffect(() => {
        UsersApiService.getAllUsers().then(value => dispatch(usersActions.getAllUsers(value.data)))
        PostsApiService.getAllPosts().then(value => dispatch(postsActions.getAllPosts(value.data)))
        CommentsApiService.getAllPosts().then(value => dispatch(commentsActions.getAllcomments(value.data)))

    }, [dispatch]);


    return (
        <div>
            <HeaderPage/>
                <Outlet/>

            {/*<hr/>*/}
            {/*{usersStore.favoriteUser && <h1>{usersStore.favoriteUser.name}</h1>}*/}
            {/*{usersStore.favoriteUser && <button onClick={usersStore.delFavoriteUser}>del</button>}*/}
            {/*{postsStore.favoritePost && <h1>{postsStore.favoritePost.title}</h1>}*/}
            {/*<hr/>*/}


        </div>
    );
};

export default MainLayout;