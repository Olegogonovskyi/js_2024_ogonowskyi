import React, {FC, useEffect, useMemo, useState} from 'react';
import {useStore} from "../../context/Store";
import {IuserModel} from "../../models/IuserModel";
import {IPostModel} from "../../models/IPostModel";
import UserWithPostsArray from "../userWithPostsArray/UserWithPostsArray";

export type usersWithPosts = IuserModel & { posts: IPostModel[] }

const UsersPostaComponent: FC = () => {
    const {usersStore: {allUsers}, postsStore: {allPosts}} = useStore()
    const [usersWithPostsArray, setusersWithPostsArray] = useState<usersWithPosts[]>([])

    const UasrsWithPosts = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => user.id === post.userId)}
            })
        }
    }, [allUsers, allPosts])
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