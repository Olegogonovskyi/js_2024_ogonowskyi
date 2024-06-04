import {createContext} from "react";
import {IuserModel} from "../models/IuserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type StoreType = {
    usersStore: {
        allusers: IuserModel[],
        setFavoriteUser: (obj: IuserModel) => void
    },
    postsStore: {
        allPosts: IPostModel[],
        setFavoritePost: (obj: IPostModel) => void
    },
    commetsStore: {
        allComments: ICommentModel[]
    }
}

const defoultValue: StoreType = {
    usersStore: {
        allusers: [],
        setFavoriteUser: () => {}
    },
    postsStore: {
        allPosts: [],
        setFavoritePost: () => {}
    },
    commetsStore: {
        allComments: []
    }
}

const Context = createContext<StoreType>(defoultValue)

export {
    Context, defoultValue
}