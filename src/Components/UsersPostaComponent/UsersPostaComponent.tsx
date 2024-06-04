import React, {FC, useContext, useEffect, useMemo, useState} from 'react';
import {Context} from "../../context/ContextProvider";
import {IuserModel} from "../../models/IuserModel";
import {IPostModel} from "../../models/IPostModel";
import UserWithPostsArray from "../userWithPostsArray/UserWithPostsArray";

export type usersWithPosts = IuserModel & { posts: IPostModel[] }

const UsersPostaComponent: FC = () => {
    const {usersStore: {allusers}, postsStore: {allPosts}} = useContext(Context)
    const [usersWithPostsArray, setusersWithPostsArray] = useState<usersWithPosts[]>([])

    const UasrsWithPosts = useMemo(() => {
        return () => {
            return allusers.map(user => {
                return {...user, posts: allPosts.filter(post => user.id === post.userId)}
            })
        }
    }, [allusers, allPosts])
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