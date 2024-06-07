import React, {FC, useEffect, useMemo, useState} from 'react';

import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import PostWithComments from "../PostWithComments/PostWithComments";
import {useSelector} from "react-redux";
import {RootState} from "../../context/Store";


export type PostWithCommentsType = IPostModel & { comments: ICommentModel[] }

const PostComentsComponent: FC = () => {

    const [postWithCommentsArray, setPostWithCommentsArray] = useState<PostWithCommentsType[]>([])
   const {posts} = useSelector((state: RootState) => state.posts)
    const {comments} = useSelector((state: RootState) => state.comments)

    const postsWithComments = useMemo(() => {
        return () => {
            return posts.map(post => {
                return {...post, comments: comments.filter(comment => post.id === comment.postId)}
            })
        }
    }, [posts, comments])

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