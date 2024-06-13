import React, {FC} from 'react';
import {useAppSelector} from "../redux/store";

const SinglePostComponent: FC = () => {
    const {favoritePost} = useAppSelector(state => state.postsReducer)
    return (
        <div>
            {
                favoritePost && <h1>{favoritePost.title}</h1>
            }
        </div>
    );
};

export default SinglePostComponent;