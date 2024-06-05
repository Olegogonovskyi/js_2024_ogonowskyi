import React, {FC, useEffect, useMemo, useState} from 'react';
import {useStore} from "../../context/Store";
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import PostWithComments from "../PostWithComments/PostWithComments";


export type PostWithCommentsType = IPostModel & { comments: ICommentModel[] }

const PostComentsComponent: FC = () => {

    const [postWithCommentsArray, setPostWithCommentsArray] = useState<PostWithCommentsType[]>([])
    const {
        postsStore: {
            allPosts
        }, commentsStore: {
            allComments
        }
    } = useStore()

    const postsWithComments = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => post.id === comment.postId)}
            })
        }
    }, [allPosts, allComments])

    useEffect(() => {
        setPostWithCommentsArray(postsWithComments)
    }, [postsWithComments]);

    return (
        <div>
            {
                postWithCommentsArray.map(postWithComments => <PostWithComments key={postWithComments.id}
                                                                                postWithComments={postWithComments}/>)
            }
        </div>
    );
};

export default PostComentsComponent;