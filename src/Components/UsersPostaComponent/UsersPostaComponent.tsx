import React, {FC, useEffect, useMemo, useState} from 'react';
import {useAppSelector} from "../../context/Store";
import {IuserModel} from "../../models/IuserModel";
import {IPostModel} from "../../models/IPostModel";
import UserWithPostsArray from "../userWithPostsArray/UserWithPostsArray";


export type usersWithPosts = IuserModel & { posts: IPostModel[] }

const UsersPostaComponent: FC = () => {
    const {users} = useAppSelector(state => state.users)
    const {posts} = useAppSelector(state => state.posts)
    const [usersWithPostsArray, setusersWithPostsArray] = useState<usersWithPosts[]>([])

    const UasrsWithPosts = useMemo(() => {
        return () => {
            return users.map(user => {
                return {...user, posts: posts.filter(post => user.id === post.userId)}
            })
        }
    }, [users, posts])
    useEffect(() => {
        setusersWithPostsArray(UasrsWithPosts)
    }, [UasrsWithPosts]);
    return (
        <div>
            {
                usersWithPostsArray.map(userWithPostsArray => <UserWithPostsArray key={userWithPostsArray.id}
                                                                                  userWithPosts={userWithPostsArray}/>)
            }
        </div>
    );
};

export default UsersPostaComponent;